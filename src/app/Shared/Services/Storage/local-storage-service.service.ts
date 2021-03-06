import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { UserDataService } from './../ScoreSaber/user-data.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageServiceService {
  constructor(private userDataSrv: UserDataService) {
    this.GetUserFromStorage();
  }

  public GetUserFromStorage() {
    this.userDataSrv.User = JSON.parse(localStorage.getItem('user'));
  }

  public StoreUser(user: IFullProfile) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userDataSrv.User = user;
  }

  public RemoveUser() {
    localStorage.removeItem('user');
  }
}
