import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { TeamService } from '../team.service';
import { Team } from '../team';
//import { TEAMS } from '../mock-teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})

export class TeamsComponent implements OnInit {

  //teams = TEAMS;
  teamList: Team[];

  constructor(private TeamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTeamList();
  }

  getTeamList() {
    this.TeamService.getTeams().subscribe((Response) => {
      this.teamList = Response;
    }, (error) => {
      console.log(error);
    })
  }

  addTeam(name, logo_url): void {
    const data = {
      "id_t": 0,
      "name": name,
      "logo_url": logo_url
    }
    
    this.TeamService.addTeam(data).subscribe((Response) => {
      this.getTeamList();
    }, (error) => {
      console.log(error);
    });
  }

}
