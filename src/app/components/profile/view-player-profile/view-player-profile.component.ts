import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-api.service';
import { IFullProfile } from 'src/app/Interfaces/ScoreSaber/Profile/FullProfile';
import { ModalController } from '@ionic/angular';
import { ISearchPlayerInfo } from 'src/app/Interfaces/ScoreSaber/Search/SearchPlayerInfo';
import { Component, Input, OnInit } from '@angular/core';
import { IScoresPage } from 'src/app/Interfaces/ScoreSaber/Scores/ScoresPage';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@ionic-native/native-page-transitions/ngx';


@Component({
  // selector: 'app-view-player-profile',
  templateUrl: './view-player-profile.component.html',
  styleUrls: ['./view-player-profile.component.css'],
})
export class ViewPlayerProfileComponent implements OnInit {
  @Input() user: ISearchPlayerInfo;

  fetchedUser: IFullProfile = null;
  recentScore: IScoresPage = null;
  topScore: IScoresPage = null;

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private viewCtrl: ModalController,
    private scoresaberSrv: ScoreSaberService
  ) { }

  async ngOnInit(): Promise<void> {
    this.fetchedUser = await this.scoresaberSrv.FetchFullPlayerProfile(
      this.user.playerId
    );
    this.recentScore = await this.scoresaberSrv.FetchRecentSongsScorePage(
      this.user.playerId,
      1
    );
    this.topScore = await this.scoresaberSrv.FetchTopSongsScorePage(
      this.user.playerId,
      1
    );
  }

  dismiss() {
    const options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
    };

    this.nativePageTransitions.slide(options);
    this.viewCtrl.dismiss();
  }
}
