import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';
import { BaseStorageService } from './base-storage.service';
import { ISongScore } from 'src/app/Interfaces/ScoreSaber/Scores/SongScore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements BaseStorageService {

  constructor() { }

  public GetUserFromStorage(): Promise<IStoredUser> {
    return JSON.parse(localStorage.getItem('root_user'));
  }
  public StoreUser(user: IStoredUser): IStoredUser {
    localStorage.setItem('root_user', JSON.stringify(user));
    return user;
  }
  public RemoveUser(): null {
    localStorage.removeItem('root_user');
    return null;
  }
  public GetUserScoresFromStorage(): Promise<ISongScore[]> {
    return JSON.parse(localStorage.getItem('root_user_scores'));
  }
  public StoreUserScores(scores: ISongScore[]) {
    localStorage.setItem('root_user_scores', JSON.stringify(scores));
    return scores;
  }
  public RemoveUserScores(): null {
    localStorage.removeItem('root_user_scores');
    return null;
  }
  public GetFriendsFromStorage(): Promise<IStoredUser[]> {
    throw new Error('Method not implemented.');
  }
  public StoreFriends(friends: IStoredUser[]): IStoredUser[] {
    throw new Error('Method not implemented.');
  }
  public RemoveFriends(): null {
    throw new Error('Method not implemented.');
  }
}
