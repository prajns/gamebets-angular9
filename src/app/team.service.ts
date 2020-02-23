import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Team } from './team'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor( private http: HttpClient ) { }

  getTeams(): Observable<Team[]> {
    return this.http.get<any>('http://127.0.01:3000/select_teams')
  }

  getTwoTeams(id_t1: number, id_t2: number,): Observable<Team[]> {
    return this.http.get<any>(`http://127.0.01:3000/select_two_teams/${id_t1}/${id_t2}`)
  }

  getTeam(id_t: number): Observable<Team> {
    return this.http.get<any>(`http://127.0.01:3000/select_team/${id_t}`)
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.put<any>(`http://127.0.01:3000/add_team`, team)
  }  

  deleteTeam(id_t: number): Observable<Team> {
    return this.http.delete<any>(`http://127.0.01:3000/delete_team/${id_t}`)
  }

  updateTeam(team: Team): Observable<Team> {
    return this.http.post<any>(`http://127.0.01:3000/update_team/${team.id_t}`, team)
  }
}
