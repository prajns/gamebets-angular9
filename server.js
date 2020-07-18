const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let url = require('url');

app.use(cors({origin: true, credentials: true}));

app.use(bodyParser.json());

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'gamebets'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Connected with gamebets database!');
});

/************** SELECTS **************/

// SELECT ALL TEAMS
app.get('/teams', (req, res) => {       
    const sql = "SELECT * FROM teams";
    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.json(results);
    });
});

// SELECT TEAM WITH ID_T
app.get('/team/:id_t', (req, res) => {   
    const sql = `SELECT * FROM teams WHERE id_t = ${req.params.id_t}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.json(results);
    });
});

// SELECT TWO TEAMS WITH ID_T = ID_T1 OR ID_T = ID_T2
app.get('/two_teams/:id_t1/:id_t2', (req, res) => {   
    const sql = `SELECT * FROM teams WHERE id_t = ${req.params.id_t1} OR id_t = ${req.params.id_t2} `;
    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.json(results);
    });
});

// SELECT ALL GAMES
app.get('/matches', (req, res) => {       
    const sql = "SELECT * FROM games JOIN teams AS t1 ON t1.id_t=games.id_t1 JOIN teams AS t2 ON t2.id_t=games.id_t2";
    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.json(results);
    });
});

// SELECT MATCH WITH ID_G
app.get('/match/:id_g', (req, res) => {   
    const sql = `SELECT * FROM games JOIN teams AS t1 ON t1.id_t=games.id_t1 JOIN teams AS t2 ON t2.id_t=games.id_t2 WHERE id_g = ${req.params.id_g}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.json(results);
    });
});

// SELECT ALL BETS
app.get('/bets', (req, res) => {       
    const sql = "SELECT * FROM bets JOIN games ON games.id_g=bets.id_g";
    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.json(results);
    });
});

// SELECT MY BETS
//SELECT * FROM bets JOIN teams ON teams.id_t = bets.pick WHERE id_b IN (5,4,3,1,6)
app.post('/my_bets/:id_g', (req, res) => {
    let data = req.body;
    let ids = [];

    for(i in data){
        ids.push(data[i].id_b);
    }

    data = ids.join(',');

    const sql = `SELECT * FROM bets JOIN teams ON teams.id_t = bets.pick WHERE id_b IN (${data}) AND id_g=${req.params.id_g}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.json(results);
    });
});

/************** UPDATES **************/

// UPDATE TEAM
app.put('/team/:id_t', (req, res) => {
    let data = req.body;
    let sql = `UPDATE teams SET name=?, logo_url=? WHERE id_t=?`;
    connection.query(sql, [data.name, data.logo_url, data.id_t], (error, results) => {
        if (error) throw error;

        return res.send(results);
    });
}); 

// UPDATE GAME
// http://127.0.0.1:3000/update_game/?date="2021-02-19"&score_t1=1&score_t2=16&id_g=1
app.put('/game/', (req, res) => {
    let url_parts = url.parse(req.url, true);
    let attr = url_parts.query;

    let sql = `UPDATE games SET date = ${attr['date']}, score_t1 = ${attr['score_t1']}, score_t2 = ${attr['score_t2']} WHERE id_g = ${attr['id_g']}`;
    connection.query(sql, (error, results) => {
        if (error) throw error;

        console.log('Game updated!');
        res.send("game updated!");
    });
});  

/************** INSERTS **************/

// ADD TEAM
app.post('/team', (req, res) => {
    let data = req.body;
    let sql = `INSERT INTO teams (name, logo_url) values(?, ?)`;
    connection.query(sql, [data.name, data.logo_url], (error, results) => {
        if (error) throw error;

        return res.send(results);
    });
});

// ADD BET
app.post('/bet', (req, res) => {
    let data = req.body;
    let sql = `INSERT INTO bets (id_g, pick, win, value) values(?, ?, ?, ?)`;
    connection.query(sql, [data.id_g, data.pick, data.win, data.value], (error, results) => {
        if (error) throw error;

        return res.send(results);
    });
}); 

/************** DELETES **************/
 
// DELETE TEAM WITH CERTAIN ID
app.delete('/team/:id_t', (req, res) => {
    let sql = `DELETE FROM teams WHERE id_t = ${req.params.id_t}`;

    connection.query(sql, (error, results) => {
        if (error) throw error;

        return res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Listening to requests on port ${port}!`);
});