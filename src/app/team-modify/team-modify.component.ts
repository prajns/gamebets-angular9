import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-modify',
  templateUrl: './team-modify.component.html',
  styleUrls: ['./team-modify.component.css']
})
export class TeamModifyComponent implements OnInit {

  @Input() team: Team;

  constructor(private route: ActivatedRoute, private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id_t = +this.route.snapshot.paramMap.get('id_t');
    this.teamService.getTeam(id_t).subscribe(team => this.team = team);
  }

  deleteTeam(): void {
    const id_t = +this.route.snapshot.paramMap.get('id_t');
    
    this.teamService.deleteTeam(id_t).subscribe((Response) => {
      this.goBack();
    }, (error) => {
      console.log(error);
    });
  }

  editTeam(name, logo_url): void {
    const id_t = +this.route.snapshot.paramMap.get('id_t');
    const data = {
      "id_t": id_t,
      "name": name,
      "logo_url": logo_url
    }
    
    this.teamService.updateTeam(data).subscribe((Response) => {
      this.goBack();
    }, (error) => {
      console.log(error);
    });

    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['teams']);
  }

}
