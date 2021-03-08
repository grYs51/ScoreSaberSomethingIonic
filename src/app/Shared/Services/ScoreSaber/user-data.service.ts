import { ISongScore } from './../../../Interfaces/ScoreSaber/Scores/SongScore';
import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  User: IFullProfile = null;
  Scores: ISongScore[] = null;

  constructor() {}
}

export interface IHomeUser{
id: string;
name: string
}
