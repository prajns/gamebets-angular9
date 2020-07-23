import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Team } from '../team';
import { TeamService } from '../team.service';
import { Game } from '../game';
import { MatchService } from '../match.service';
import { myBetsModel } from '../myBetsModel';
import { Bet } from '../bet';
import { BetService } from '../bet.service';
import { BetTicket } from '../betTicket';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  @Input() teamList: Team[];
  @Input() betList: BetTicket [] = [];
  @Input() game: Game;
  @Input() matchstatus: string;
  myBetsIdList: myBetsModel[];
  teamA: Team;
  teamB: Team;
  lastBetId: number;

  selectedWinner;
  
  myBetsIdArray: Array<number>;

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private MatchService: MatchService, 
    private TeamService: TeamService, 
    private BetService: BetService
  ) { }

  ngOnInit() {
    this.getTwoTeamList();
    this.getLocalStorage();
    this.getMatchList();
  }

  getMatchList() {
    const id_g = +this.route.snapshot.paramMap.get('id_g');
    this.MatchService.getMatch(id_g).subscribe((Response) => {
      this.game = Response;
    }, (error) => {
      console.log(error);
    })
  }

  getTwoTeamList() {
    const id_t1 = +this.route.snapshot.paramMap.get('id_t1');
    const id_t2 = +this.route.snapshot.paramMap.get('id_t2');
    this.TeamService.getTwoTeams(id_t1, id_t2).subscribe((Response) => {
      this.teamList = Response;
      this.teamA = this.teamList[0];
      this.teamB = this.teamList[1];
    }, (error) => {
      console.log(error);
    })    
  }

  getBetList() {
    //const id_b = +this.route.snapshot.paramMap.get('id_b');
    const id_g = +this.route.snapshot.paramMap.get('id_g');
    this.BetService.getMyBetsBase(id_g, this.myBetsIdList).subscribe((Response) => {
      this.betList = Response;
    }, (error) => {
      console.log(error);
    })
  }

  getLocalStorage() {
    this.BetService.getBets().subscribe((Response) => {
      this.myBetsIdList = Response;
      if(Response.length) {
        this.getBetList();
      }
    },(error) => {
      console.log("No saved bets in Localstorage!");
    }); 
  }

  addLocalStorage(inx: number) {
    this.BetService.placeBet(inx).subscribe((Response) => {
      this.myBetsIdList = Response;
    });
  }

  onWinnerPick(val) {
    this.selectedWinner = val;
  }

  addBet(form: NgForm): void {
      console.log(form.value)
      
    const id_g = +this.route.snapshot.paramMap.get('id_g');
    const data = {
      "id_b": 0,
      "id_g": id_g,
      "pick": form.value.selectedWinner,
      "win": 0,
      "value": form.value.betValue
    }
    
    this.BetService.placeBetBase(data).subscribe((Response) => {
      this.lastBetId = Response["insertId"];
      this.addLocalStorage(this.lastBetId);
      this.getBetList();
      this.getLocalStorage();
    }, (error) => {
      console.log(error);
    });
    
  }

  goBack(): void {
    this.router.navigate(['matches']);
  }

}
