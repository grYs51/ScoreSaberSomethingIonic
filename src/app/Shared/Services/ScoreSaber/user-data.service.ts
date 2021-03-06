import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  User: IFullProfile = null;

  constructor() { }
}
