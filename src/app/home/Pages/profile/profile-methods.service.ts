import { Injectable } from '@angular/core';
import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-service.service';
import { IScoresPage } from 'src/app/Interfaces/ScoreSaber/Scores/ScoresPage';
import { LocalStorageService } from 'src/app/Shared/Services/Storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileMethodsService {
  isLoading: boolean = false;
  loadedPages: number = 0;
  constructor(
    private scoreSaberSrv: ScoreSaberService,
    private store: LocalStorageService
  ) {}

  async GetAllScores(id: string, totalPages: number) {
    let obj: any[] = [];
    this.isLoading = true;
    for (let i = 1; i <= totalPages; i++) {
      let resp: IScoresPage = await this.scoreSaberSrv.FetchRecentSongsScorePage(id,i);
      resp.scores.forEach((song) => {
        obj.push(song);
      });
      this.loadedPages = i;
    }
    this.store.StoreUserScores(obj)
    this.isLoading = false;
  }
}
