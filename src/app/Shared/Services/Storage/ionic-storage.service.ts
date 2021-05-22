import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';
import { BaseStorageService } from './base-storage.service';
import { Injectable } from '@angular/core';
import { ISongScore } from 'src/app/Interfaces/ScoreSaber/Scores/SongScore';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root',
})
export class IonicStorageService extends BaseStorageService {

  // Home_User
  public async GetUserFromStorage(): Promise<IStoredUser> {
    return await this.storage.get('root_user').then((value: IStoredUser) => {
      return value;
    });
  }

  public StoreUser(user: IStoredUser): IStoredUser {
    this.storage.set('root_user', (user));
    return user;
  }

  public RemoveUser(): null {
    this.storage.remove('root_user');
    return null;
  }

  // HomeUserScores
  public async GetUserScoresFromStorage(): Promise<ISongScore[]> {
    return await this.storage.get('root_user_scores').then((value: ISongScore[]) => {
      return value;
    });
  }

  public StoreUserScores(scores: ISongScore[]): ISongScore[] {
    this.storage.set('root_user_scores', scores);
    return scores;
  }

  public RemoveUserScores(): null {
    this.storage.remove('root_user_scores');
    return null;
  }

  // Friends
  public async GetFriendsFromStorage(): Promise<IStoredUser[]> {
    return await this.storage.get('friends').then((value: IStoredUser[]) => {
      return value;
    });
  }
  public StoreFriends(friends: IStoredUser[]): IStoredUser[] {
    this.storage.set('friends', friends);
    return friends;

  }
  public RemoveFriends(): null {
    this.storage.remove('friends');
    return null;
  }

  constructor(private storage: Storage) {
    super();
    this.GetUserFromStorage();
    this.GetUserScoresFromStorage();
    this.GetFriendsFromStorage();
  }


}
