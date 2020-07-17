import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Game } from './game'

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor( private http: HttpClient ) { }

  getMatches(): Observable<Game[]> {
    return this.http.get<any>('http://127.0.01:3000/matches')
  }

  getMatch(id_g: number): Observable<Game> {
    return this.http.get<any>(`http://127.0.01:3000/match/${id_g}`)
  }
}

