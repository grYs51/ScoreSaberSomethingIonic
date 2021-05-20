import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// TODO: temporarily

export class OldScoreSaberApiService {
  constructor(private _http: HttpClient) {}

  getLeaderBoard() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this._http.get(
      'http://scoresaber.com/api.php?function=get-leaderboards&cat=3&page=1&limit=1',
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      }
    );
  }
}
