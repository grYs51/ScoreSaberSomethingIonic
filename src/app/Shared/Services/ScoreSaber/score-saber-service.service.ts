import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ScoreSaberService {
  private SCORESABER_BASEURL = 'https://new.scoresaber.com';
  private SCORESABER_API_BASEURL = this.SCORESABER_BASEURL + '/api/';

  constructor(private _http: HttpClient) {}

  //   FetchBasicProfile< IBasicProfile> (scoreSaberId: string): IBasicProfile{
  //   return  this.fetchData<IBasicProfile>(`${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/basic`);
  // }

  public FetchFullPlayerProfile<IFullProfile>(
    scoreSaberId: string
  ): Promise<IFullProfile> {
    return this.fetchData<IFullProfile>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/full`
    );
  }

  // public FetchRecentSongsScorePage<IScoresPage>(scoreSaberId: string, page : number): IScoresPage{
  //   return this.fetchData<IScoresPage>(`${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/scores/recent/${page}`);
  // }

  // public FetchTopSongsScorePage<IScoresPage>(scoreSaberId: string, page : number): IScoresPage{
  //   return this.fetchData<IScoresPage>(`${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/scores/top/${page}`);
  // }

  // public SearchPlayersByName<IPlayersPage>(name : string): IPlayersPage{
  //   if (name == null || name.length < 4 || name.length >= 32 || name.match(/^ *$/) !== null)
  // 		{
  // 			throw new Error("Please enter a player name between 3 and 32 characters! (bounds not inclusive)");
  // 		}
  //   return this.fetchData<IPlayersPage>(`${this.SCORESABER_API_BASEURL}players/by-name/${name}`);
  // }

  private async fetchData<T>(url: string): Promise<T> {
    //   //TODO: RateLimit Check
    //   console.log(resp.headers.get("x-ratelimit-reset"));
    //   console.log(resp.headers.get("x-ratelimit-limit"));
    //   console.log(resp.headers.get("x-ratelimit-remaining"));
    return await this._http
      .get<T>(url, { observe: 'response' })
      .toPromise()
      .then(function (HttpResponse) {
        return HttpResponse.body;
      })
      .catch(function (HttpResponse: HttpResponse<T>) {
        throw new Error(HttpResponse.headers.get('x-ratelimit-reset'));
      });
  }
}
