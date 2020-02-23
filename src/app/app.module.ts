import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamModifyComponent } from './team-modify/team-modify.component';
import { MatchDetailComponent } from './match-detail/match-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    HomeComponent,
    MatchesComponent,
    TeamDetailComponent,
    TeamModifyComponent,
    MatchDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
