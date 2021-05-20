import { UserDataService } from './Shared/Services/ScoreSaber/user-data.service';
import { Component } from '@angular/core';
import { CacheService } from 'ionic-cache';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Leaderboard', url: 'home/leaderboard', icon: 'diamond' },
    { title: 'Maps', url: 'home/maps', icon: 'folder' },
    { title: 'Ranked Maps', url: 'home/ranked_maps', icon: 'heart' },
    { title: 'Profile', url: 'home/profile', icon: 'person' },
    { title: 'Friends', url: 'home/friends', icon: 'people' },
  ];

  public otherAppPages = [
    { title: 'Settings', url: 'settings', icon: 'settings' },
  ];

  constructor(cache: CacheService, public userData: UserDataService) {
    cache.setDefaultTTL(60 * 2);
    cache.setOfflineInvalidate(false);
  }
}
