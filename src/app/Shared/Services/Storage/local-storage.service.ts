import { ISongScore } from 'src/app/Interfaces/ScoreSaber/Scores/SongScore';
import { IFullProfile } from '../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { UserDataService } from '../ScoreSaber/user-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  constructor(private userDataSrv: UserDataService) {
    this.GetUserFromStorage();
    this.GetUserScoresFromStorage();
  }



//Home_User
  public GetUserFromStorage() {
    this.userDataSrv.User = JSON.parse(localStorage.getItem('root_user'));
  }

  public StoreUser(user: IFullProfile) {
    localStorage.setItem('root_user', JSON.stringify(user));
    this.userDataSrv.User = user;
  }

  public RemoveUser() {
    localStorage.removeItem('root_user');
  }

  //Home_User_Scores
  public GetUserScoresFromStorage() {
    this.userDataSrv.Scores = JSON.parse(localStorage.getItem('root_user_scores'));
  }

  public StoreUserScores(scores: ISongScore[]) {
    localStorage.setItem('root_user_scores', JSON.stringify(scores));
    this.userDataSrv.Scores = scores;
  }

  public RemoveUserScores() {
    localStorage.removeItem('root_user_scores');
  }
}
