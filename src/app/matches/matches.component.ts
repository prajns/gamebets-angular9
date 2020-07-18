import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TeamService } from '../team.service';
import { MatchService } from '../match.service';

import { Team } from '../team';
//import { TEAMS } from '../mock-teams';
import { Game } from '../game';
//import { GAMES } from '../mock-games';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  teamList: Team[];
  upcomingMatches: Game[] = [];
  archivedMatches: Game[] = [];

  constructor(private MatchService: MatchService, private TeamService: TeamService) { }

  ngOnInit() {
    this.getTeamList();
    this.getMatchList();
  }

  getMatchList() {
    this.MatchService.getMatches().subscribe((response) => {      
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const currentDate = new Date(date + ' ' + time);

      response.forEach(element => {

        const gameDate = new Date(element.date);

        if(currentDate < gameDate) {
            if(!element.score_t1 && !element.score_t2){
                this.upcomingMatches.push(element);
            }
        } else {
            this.archivedMatches.push(element);
        }
      });

    }, (error) => {
      console.log(error);
    })
  }

  getTeamList() {
    this.TeamService.getTeams().subscribe((Response) => {
      this.teamList = Response;
    }, (error) => {
      console.log(error);
    })    
  }

}
