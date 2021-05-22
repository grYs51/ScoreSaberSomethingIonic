import { Injectable } from '@angular/core';
import { ISongScore } from 'src/app/Interfaces/ScoreSaber/Scores/SongScore';
import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';


@Injectable({
  providedIn: 'root',
})
export abstract class BaseStorageService {
  constructor() {
  }
  public abstract GetUserFromStorage(): Promise<IStoredUser>;

  public abstract StoreUser(user: IStoredUser): IStoredUser;

  public abstract RemoveUser(): null;

  // Home_User_Scores
  public abstract GetUserScoresFromStorage(): Promise<ISongScore[]>;

  public abstract StoreUserScores(scores: ISongScore[]);

  public abstract RemoveUserScores(): null;

}
