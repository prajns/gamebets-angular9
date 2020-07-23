import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

import { TeamService } from '../team.service';
import { Team } from '../team';
import { NgForm } from '@angular/forms';
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

  addTeam(form: NgForm): void {
    const data = {
      "id_t": 0,
      "name": form.value.teamName.newTeamName,
      "logo_url": form.value.teamLogo.newTeamLogo
    }
    
    this.TeamService.addTeam(data).subscribe((Response) => {
      this.getTeamList();
    }, (error) => {
      console.log(error);
    });

    form.reset();
  }

}
