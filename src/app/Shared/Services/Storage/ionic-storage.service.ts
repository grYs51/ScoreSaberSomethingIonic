import { IStoredUser } from './../../../Interfaces/StoringData/StoreUser';
import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { UserDataService } from './../ScoreSaber/user-data.service';
import { BaseStorageService } from './base-storage.service';
import { Injectable } from '@angular/core';
import { ISongScore } from 'src/app/Interfaces/ScoreSaber/Scores/SongScore';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class IonicStorageService extends BaseStorageService {
  // Home_User
  public async GetUserFromStorage() {
    return await this.storage.get('root_user').then((value) => {
      const obj: IStoredUser = JSON.parse(value);
      return obj;
    });
  }

  public StoreUser(user: IFullProfile): IStoredUser {
    const obj: IStoredUser = {
      id: user.playerInfo.playerId,
      name: user.playerInfo.playerName,
      avatar: user.playerInfo.avatar,
      country: user.playerInfo.country,
    };
    this.storage.set('root_user', JSON.stringify(obj));
    this.userDataSrv.User = user;
    return obj;
  }

  public RemoveUser() {
    this.storage.remove('root_user');
    this.userDataSrv.User = null;
  }

  // HomeUserScores
  public async GetUserScoresFromStorage() {
    return await this.storage.get('root_user_scores').then((value) => {
      this.userDataSrv.Scores = JSON.parse(value);
      return this.userDataSrv.Scores;
    });
  }

  public StoreUserScores(scores: ISongScore[]) {
    this.storage.set('root_user_scores', JSON.stringify(scores));
    this.userDataSrv.Scores = scores;
  }

  public RemoveUserScores() {
    this.storage.remove('root_user_scores');
    this.userDataSrv.Scores = null;
  }

  constructor(public userDataSrv: UserDataService, private storage: Storage) {
    super();
    this.GetUserFromStorage();
    this.GetUserScoresFromStorage();
  }
}
