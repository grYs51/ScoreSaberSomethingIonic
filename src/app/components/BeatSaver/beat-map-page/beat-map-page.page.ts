import { Component, Input, OnInit } from '@angular/core';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from '@ionic-native/native-page-transitions/ngx';
import { ModalController } from '@ionic/angular';
import { IBeatSaverMap } from 'src/app/Interfaces/BeatSaver/BeatsaverMap';

@Component({
  templateUrl: './beat-map-page.page.html',
  styleUrls: ['./beat-map-page.page.css'],
})
export class BeatMapPagePage implements OnInit {
  @Input() map: IBeatSaverMap;
  @Input() date: string;

  select;
  selected;
  selectedCharacteristic = 0;
  buttonExtraClicked = false;

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private viewCtrl: ModalController
  ) {}
  Info = null;

  ngOnInit(): void {
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

  openUrl(){
    window.open(`https://skystudioapps.com/bs-viewer/?id=${this.map.key}`);
  }
}


