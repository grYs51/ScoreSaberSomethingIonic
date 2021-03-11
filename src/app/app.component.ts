import { Component } from '@angular/core';
import { CacheService } from 'ionic-cache';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Leaderboard', url: 'home/leaderboard', icon: 'mail' },
    { title: 'Maps', url: 'home/maps', icon: 'paper-plane' },
    { title: 'Ranked Maps', url: 'home/ranked_maps', icon: 'heart' },
    { title: 'Profile', url: 'home/profile', icon: 'archive' },
    { title: 'Friends', url: 'home/friends', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(cache: CacheService) {
    cache.setDefaultTTL(60 * 2);
    cache.setOfflineInvalidate(false);
  }
}
