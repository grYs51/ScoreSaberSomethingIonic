import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonVirtualScroll } from '@ionic/angular';
import { IPlayersPage } from 'src/app/Interfaces/ScoreSaber/Search/PlayersPage';

@Component({
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.css'],
})
export class LeaderboardPage implements OnInit {
  page: number = 1;
  users: IPlayersPage = null;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonVirtualScroll) virtualScroll: IonVirtualScroll;

  constructor(private scoreSaberSrv: ScoreSaberService) {}

  async ngOnInit(): Promise<void> {
    this.users = await this.scoreSaberSrv.FetchGlobalPlayers(this.page);
    console.log(this.users);
  }

  async loadData(event) {
    this.page++;
    let resp: IPlayersPage = await this.scoreSaberSrv.FetchGlobalPlayers(
      this.page
    );

    resp.players.forEach((player) => {
      this.users.players.push(player);
    });

    event.target.complete();
    this.virtualScroll.checkEnd();
  }
}
