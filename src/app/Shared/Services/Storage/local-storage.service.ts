import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { BaseStorageService } from './base-storage.service';
import { ISongScore } from 'src/app/Interfaces/ScoreSaber/Scores/SongScore';
import { UserDataService } from '../ScoreSaber/user-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
 export class LocalStorageService extends BaseStorageService {
  constructor(public userDataSrv: UserDataService) {
    super();
    this.GetUserFromStorage();
    this.GetUserScoresFromStorage();
  }

  // Home_User
  public GetUserFromStorage() {
    console.log(this.userDataSrv);
    this.userDataSrv.User = JSON.parse(localStorage.getItem('root_user'));
  }

  public StoreUser(user: IFullProfile) {
    localStorage.setItem('root_user', JSON.stringify(user));
    this.userDataSrv.User = user;
  }

  public RemoveUser() {
    localStorage.removeItem('root_user');
    this.userDataSrv.User = null;
  }

  // Home_User_Scores
  public GetUserScoresFromStorage() {
    this.userDataSrv.Scores = JSON.parse(localStorage.getItem('root_user_scores'));
  }

  public StoreUserScores(scores: ISongScore[]) {
    localStorage.setItem('root_user_scores', JSON.stringify(scores));
    this.userDataSrv.Scores = scores;
  }

  public RemoveUserScores() {
    localStorage.removeItem('root_user_scores');
    this.userDataSrv.Scores = null;

  }
}
