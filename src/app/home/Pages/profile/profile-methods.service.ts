import { UserDataService } from './../../../Shared/Services/ScoreSaber/user-data.service';
import { IonicStorageService } from './../../../Shared/Services/Storage/ionic-storage.service';
import { Injectable } from '@angular/core';
import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-api.service';
import { IScoresPage } from 'src/app/Interfaces/ScoreSaber/Scores/ScoresPage';

@Injectable({
  providedIn: 'root',
})
export class ProfileMethodsService {
  isLoading = false;

  totalPages = 1;
  loadedPages = 0;

  TopScore: IScoresPage = null;
  RecentScore: IScoresPage = null;

  constructor(
    private scoreSaberSrv: ScoreSaberService,
    private store: IonicStorageService,
    private userDataSrv: UserDataService
  ) { }

  async GetAllScores(id: string) {
    const obj: any[] = [];
    this.isLoading = true;
    for (let i = 1; i <= this.totalPages; i++) {
      const resp: IScoresPage =
        await this.scoreSaberSrv.FetchRecentSongsScorePage(id, i);
      resp.scores.forEach((song) => {
        obj.push(song);
      });
      this.loadedPages = i;
    }
    this.store.StoreUserScores(obj);
    this.isLoading = false;
  }

  async GetProfile(userId: string) {
    this.userDataSrv.User = await this.scoreSaberSrv.FetchFullPlayerProfile(
      userId
    );
    this.getTotalPages();
  }

  getTotalPages() {
    this.totalPages = Math.ceil(
      this.userDataSrv.User.scoreStats.totalPlayCount / 8
    );
  }

  async GetFirstPageTopScore(userId: string) {
    this.TopScore = await this.scoreSaberSrv.FetchTopSongsScorePage(userId, 1);
  }

  async GetFirstPageRecentScore(userId: string) {
    this.RecentScore = await this.scoreSaberSrv.FetchRecentSongsScorePage(
      userId,
      1
    );
  }
}
