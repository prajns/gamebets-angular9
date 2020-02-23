import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../team';
import { Game } from '../game';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  @Input() team: Team;
  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

}
