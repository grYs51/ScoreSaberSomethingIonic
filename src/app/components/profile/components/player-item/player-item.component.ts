import { ISearchPlayerInfo } from './../../../../Interfaces/ScoreSaber/Search/SearchPlayerInfo';
import { ViewPlayerProfileComponent } from 'src/app/components/profile/view-player-profile/view-player-profile.component';
import { Component, Input, OnInit } from '@angular/core';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
import { IBasePlayerInfo } from 'src/app/Interfaces/ScoreSaber/Shared/BasePlayerInfo';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
})
export class PlayerItemComponent implements OnInit {
  @Input() player: ISearchPlayerInfo | IBasePlayerInfo;
  flag: boolean;
  constructor(
    private nativePageTransitions: NativePageTransitions,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.flag =  isSearchPlayer(this.player);
    console.log(this.flag);
    }

  async viewPlayer() {
    const options: NativeTransitionOptions = {
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

function isSearchPlayer(player: ISearchPlayerInfo | IBasePlayerInfo): player is ISearchPlayerInfo {
  return (player as ISearchPlayerInfo).difference !== undefined;
}
