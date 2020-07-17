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

  //teams = TEAMS;
  //games = GAMES;

  teamList: Team[];
  teamA: Team;
  teamB: Team;
  gameList: Game[];

  constructor(private MatchService: MatchService, private TeamService: TeamService) { }

  ngOnInit() {
    this.getTeamList();
    this.getMatchList();
  }

  getMatchList() {
    this.MatchService.getMatches().subscribe((Response) => {
      this.gameList = Response;
    }, (error) => {
      console.log(error);
    })
  }

  getTeamList() {
    this.TeamService.getTeams().subscribe((Response) => {
      this.teamList = Response;
      this.teamA = this.teamList[0];
      this.teamB = this.teamList[1];
    }, (error) => {
      console.log(error);
    })    
  }

}
