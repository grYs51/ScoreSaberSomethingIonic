import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

const headeroptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    observe: 'response',
  }),
};

@Injectable({ providedIn: 'root' })
export class ScoreSaberService {
  private SCORESABER_BASEURL = 'https://new.scoresaber.com';
  private SCORESABER_API_BASEURL = this.SCORESABER_BASEURL + '/api/';

  constructor(private _http: HttpClient) {}

  FetchBasicProfile<IBasicProfile>(
    scoreSaberId: string
  ): Promise<IBasicProfile> {
    return this.fetchData<IBasicProfile>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/basic`
    );
  }

  public FetchFullPlayerProfile<IFullProfile>(
    scoreSaberId: string
  ): Promise<IFullProfile> {
    return this.fetchData<IFullProfile>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/full`
    );
  }

  public FetchRecentSongsScorePage<IScoresPage>(
    scoreSaberId: string,
    page: number
  ): Promise<IScoresPage> {
    return this.fetchData<IScoresPage>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/scores/recent/${page}`
    );
  }

  public FetchTopSongsScorePage<IScoresPage>(
    scoreSaberId: string,
    page: number
  ): Promise<IScoresPage> {
    return this.fetchData<IScoresPage>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/scores/top/${page}`
    );
  }

  public SearchPlayersByName<IPlayersPage>(
    name: string
  ): Promise<IPlayersPage> {
    if (
      name == null ||
      name.length < 4 ||
      name.length >= 32 ||
      name.match(/^ *$/) !== null
    ) {
      throw new Error(
        'Please enter a player name between 3 and 32 characters! (bounds not inclusive)'
      );
    }
    return this.fetchData<IPlayersPage>(
      `${this.SCORESABER_API_BASEURL}players/by-name/${name}`
    );
  }

  private async fetchData<T>(
    url: string,
    retries = 3,
    timeout = 0
  ): Promise<T> {if (retries > 0) {
      if (timeout != 0) {
        console.log('Rate-limited: ', timeout / 1000 + 's');
        await timer(timeout).pipe(take(1)).toPromise();
      }
      return await this._http
        .get<T>(url, { observe: 'response' })
        .toPromise()
        .then((res: HttpResponse<T>) => {
          return res.body;
        })
        .catch((e: HttpErrorResponse) => {
          console.log(e);
          if (e.status == 429) {
            let time = Math.ceil(
              Number(e.headers.get('x-ratelimit-reset')) - Date.now() / 1000
            );
            return this.fetchData(url, retries - 1, time * 1000);
          }
          return this.fetchData(url, retries - 1, 1000);
        });
    } else {
      throw new Error('Something went wrong with getting data');
    }
  }
}
