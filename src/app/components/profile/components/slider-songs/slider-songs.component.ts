import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-api.service';
import { IScoresPage } from 'src/app/Interfaces/ScoreSaber/Scores/ScoresPage';
import { Component, Input, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
import { ModalProfileSongsComponent } from '../modal-profile-songs/modal-profile-songs.component';
@Component({
  selector: 'app-slider-songs',
  templateUrl: './slider-songs.component.html',
  styleUrls: ['./slider-songs.component.css']
})
export class SliderSongsComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;

  songs: IScoresPage;

  constructor(private scoresaberSrv: ScoreSaberService,
              private nativePageTransitions: NativePageTransitions,
              private modalController: ModalController) { }

  ngOnInit(): void {
  this.name === 'Top Score' ? this.top() : this.recent();
  }

  async recent(){
    this.songs = await this.scoresaberSrv.FetchRecentSongsScorePage(this.id);
  }
  async top(){
    this.songs = await this.scoresaberSrv.FetchTopSongsScorePage(this.id);
  }

  async openModal(){
    const options: NativeTransitionOptions = {
      direction: 'bottom',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
    };

    this.nativePageTransitions.slide(options);

    // const modal = await this.modalController.create({
    //   component: ModalProfileSongsComponent ,
    //   componentProps: {
    //     id: this.id,
    //     name: this.name
    //   },
    // });
    // await modal.present();
  }

}
