import { BeatMapPagePage } from './../beat-map-page/beat-map-page.page';
import { Component, Input, OnInit } from '@angular/core';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
import { IBeatSaverMap } from 'src/app/Interfaces/BeatSaver/BeatsaverMap';
import * as moment from 'moment';

@Component({
  selector: 'app-beat-map-item',
  templateUrl: './beat-map-item.component.html',
  styleUrls: ['./beat-map-item.component.css'],
})
export class BeatMapItemComponent implements OnInit {
  @Input() map: IBeatSaverMap;

  datenow: string;

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private modalController: ModalController
  ) {}

  hasDiff(key) {
    return this.map.metadata.difficulties[Diffs[key]];
  }
  returnDiff(num: number) {
    return Diffs[num];
  }

  ngOnInit(): void {
    this.datenow = moment(this.map.uploaded).fromNow();
  }
  async showMap() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
    };

    this.nativePageTransitions.slide(options);

    const modal = await this.modalController.create({
      component: BeatMapPagePage,
      componentProps: {
        map: this.map,
        date: this.datenow
      },
    });
    await modal.present();
  }

  setRatingColor(): string {
    let rating = Math.round(this.map.stats.rating * 100);
    if (rating != 0) {
      if (rating <= 50) {
        return Diffs[3];
      } else if (rating <= 65) {
        return Diffs[2];
      } else if (rating <= 100) {
        return Diffs[0];
      }
    } else {
      return 'noDiff ratingcolor';
    }
  }
}

export enum Diffs {
  easy,
  normal,
  hard,
  expert,
  expertPlus,
}
