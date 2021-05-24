import { ISearchPlayerInfo } from 'src/app/Interfaces/ScoreSaber/Search/SearchPlayerInfo';
import { ViewPlayerProfileComponent } from 'src/app/components/profile/view-player-profile/view-player-profile.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
import { IBasePlayerInfo } from 'src/app/Interfaces/ScoreSaber/Shared/BasePlayerInfo';
import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
})
export class PlayerItemComponent implements OnInit {
  @Input() player: ISearchPlayerInfo | IBasePlayerInfo;

  @Output() public slideButtonEvent = new EventEmitter<IStoredUser>();

  flag: boolean;
  constructor(
    private nativePageTransitions: NativePageTransitions,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.flag = isSearchPlayer(this.player);
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

  slideButton() {
    this.slideButtonEvent.emit(this.makeStoredUser());
  }

  makeStoredUser(): IStoredUser {
    return {
      id: this.player.playerId,
      name: this.player.playerName,
      avatar: this.player.avatar,
      country: this.player.country
    };
  }
}

function isSearchPlayer(player: ISearchPlayerInfo | IBasePlayerInfo): player is ISearchPlayerInfo {
  return (player as ISearchPlayerInfo).difference !== undefined;
}
