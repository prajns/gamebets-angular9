import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';

import { myBetsModel } from './myBetsModel';
import { Bet } from './bet'
import { BetTicket } from './betTicket';

@Injectable({
  providedIn: 'root'
})
export class BetService {
  LOCAL_STORAGE_KEY = 'myBets';
  bets: myBetsModel[];
  bet_id: myBetsModel;

  constructor( private http: HttpClient ) {
    this.bets = [];
  }

  getBets(): Observable<myBetsModel[]> {
    const tmp = localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (tmp) {
      this.bets = JSON.parse(tmp);
    } else {
      this.bets = [];
    }
    return of( this.bets );
  }

  placeBet(inx: number): Observable<myBetsModel[]> {
    this.bets.push({ id_b: inx });
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.bets));
    return of( this.bets );
  }

  getMyBetsBase(id_t: number, data: any): Observable<BetTicket[]> {
    return this.http.post<any>(`http://127.0.01:3000/select_my_bets/${id_t}`, data);
  }

  getBetsBase(): Observable<Bet[]> {
    return this.http.get<any>('http://127.0.01:3000/select_bets');
  }

  placeBetBase(bet: Bet): Observable<Bet> {
    return this.http.put<any>('http://127.0.01:3000/add_bet', bet);
  }

}
