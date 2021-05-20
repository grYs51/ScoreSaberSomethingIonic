import { ViewPlayerProfileComponent } from '../../view-player-profile/view-player-profile.component';
import { Component, Input, OnInit } from '@angular/core';
import { ISearchPlayerInfo } from 'src/app/Interfaces/ScoreSaber/Search/SearchPlayerInfo';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
})
export class PlayerItemComponent implements OnInit {
  @Input() player: ISearchPlayerInfo;

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {}

  async viewPlayer() {

    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
    };

    this.nativePageTransitions.slide(options);
    const modal = await this.modalController.create({
      component: ViewPlayerProfileComponent,
      componentProps: {
        user: this.player,
      },
    });
    await modal.present();
  }
}
