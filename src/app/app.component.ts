import { UserDataService } from './Shared/Services/ScoreSaber/user-data.service';
import { IStoredUser } from './Interfaces/StoringData/StoreUser';
import { ProfileMethodsService } from './home/Pages/profile/profile-methods.service';
import { Component } from '@angular/core';
import { CacheService } from 'ionic-cache';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Leaderboard', url: 'leaderboard', icon: 'diamond' },
    { title: 'Maps', url: 'maps', icon: 'folder' },
    { title: 'Ranked Maps', url: 'ranked_maps', icon: 'heart' },
    { title: 'Profile', url: 'profile', icon: 'person' },
    { title: 'Friends', url: 'friends', icon: 'people' },
  ];

  public otherAppPages = [
    { title: 'Settings', url: 'settings', icon: 'settings' },
  ];

  constructor(cache: CacheService, private profileSrv: ProfileMethodsService, public userData: UserDataService) {
    cache.setDefaultTTL(60 * 2);
    cache.setOfflineInvalidate(false);
    this.checkId();
  }

  async checkId() {
    const user: IStoredUser = await this.profileSrv.init();
    if (user != null) {
      this.profileSrv.GetProfile(user.id);
    }
  }
}
