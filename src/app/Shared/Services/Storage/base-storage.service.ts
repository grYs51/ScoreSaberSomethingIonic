import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
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

  public abstract StoreUser(user: IFullProfile);

  public abstract RemoveUser();

  // Home_User_Scores
  public abstract GetUserScoresFromStorage();

  public abstract StoreUserScores(scores: ISongScore[]);

  public abstract RemoveUserScores();
}
