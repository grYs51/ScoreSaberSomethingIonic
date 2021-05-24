import { FriendsService } from './../friends/friends.service';
import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';
import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll, ToastController } from '@ionic/angular';
import { IPlayersPage } from 'src/app/Interfaces/ScoreSaber/Search/PlayersPage';

@Component({
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.css'],
})
export class LeaderboardPage implements OnInit {

  page = 1;
  users: IPlayersPage = null;
  dummies = Array.from(Array(100).keys());
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  constructor(private scoreSaberSrv: ScoreSaberService, private friendsService: FriendsService, private toast: ToastController) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.scoreSaberSrv.FetchGlobalPlayers(this.page);
  }

  async loadData(event) {
    this.page++;
    const resp: IPlayersPage = await this.scoreSaberSrv.FetchGlobalPlayers(
      this.page
    );

    resp.players.forEach((player) => {
      this.users.players.push(player);
    });

    event.target.complete();
    this.virtualScroll.checkEnd();
  }

  async addUserToFriends(friend: IStoredUser) {

    const messageString = (await this.friendsService.AddFriendToFriendList(friend)).valueOf()
      ? 'Player already exist!'
      : 'Player addded!';

    const toast = await this.toast.create({
      position: 'top',
      message: messageString,
      duration: 1500,
    });
    toast.present();
    return;
  }
}
