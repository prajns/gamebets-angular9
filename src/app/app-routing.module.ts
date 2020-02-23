import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamModifyComponent } from './team-modify/team-modify.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'team_details/:id_t', component: TeamModifyComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'match_details/:id_g/:id_t1/:id_t2', component: MatchDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
