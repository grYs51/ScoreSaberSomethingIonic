import { RateLimitService } from '../Extensions/rate-limit.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScoreSaberService {
  private SCORESABER_BASEURL = 'https://new.scoresaber.com';
  private SCORESABER_API_BASEURL = this.SCORESABER_BASEURL + '/api/';

  constructor(private rateLimitSrv: RateLimitService) { }

  FetchBasicProfile<IBasicProfile>(
    scoreSaberId: string
  ): Promise<IBasicProfile> {
    return this.rateLimitSrv.fetchData<IBasicProfile>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/basic`
    );
  }

  public FetchFullPlayerProfile<IFullProfile>(
    scoreSaberId: string
  ): Promise<IFullProfile> {
    return this.rateLimitSrv.fetchData<IFullProfile>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/full`
    );
  }

  public FetchRecentSongsScorePage<IScoresPage>(
    scoreSaberId: string,
    page: number = 1
  ): Promise<IScoresPage> {
    return this.rateLimitSrv.fetchData<IScoresPage>(
      `${this.SCORESABER_API_BASEURL}player/${scoreSaberId}/scores/recent/${page}`
    );
  }

  public FetchTopSongsScorePage<IScoresPage>(
    scoreSaberId: string,
    page: number = 1
  ): Promise<IScoresPage> {
    return this.rateLimitSrv.fetchData<IScoresPage>(
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
    return this.rateLimitSrv.fetchData<IPlayersPage>(
      `${this.SCORESABER_API_BASEURL}players/by-name/${name}`
    );
  }

  public FetchGlobalPlayers<IPlayersPage>(page: number): Promise<IPlayersPage> {
    return this.rateLimitSrv.fetchData<IPlayersPage>(
      `${this.SCORESABER_API_BASEURL}players/${page}`
    );
  }
}
