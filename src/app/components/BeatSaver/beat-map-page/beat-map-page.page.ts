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

  constructor(
    private nativePageTransitions: NativePageTransitions,
    private viewCtrl: ModalController
  ) {}
    Info = null
  ngOnInit(): void {
    for (let i = 0; i < this.map.metadata.characteristics.length; i++) {
      if(this.map.metadata.characteristics[i].name == CharacteristicEnum[0] )
      this.selectedCharacteristic = i;
    }
  }

  dismiss() {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
    };

    this.nativePageTransitions.slide(options);
    this.viewCtrl.dismiss();
  }

  filterButton(charistic: number) {
    if (this.selectedCharacteristic != charistic) {
      this.selectedCharacteristic = charistic;
      this.select = null;
      this.selected = null
    }
  }
  onChangeObj(value){
    this.selected = value.charAt(0).toLowerCase() + value.slice(1);
    if(value == "Expertplus"){
      this.selected = "expertPlus";
    } 
  }
}

enum CharacteristicEnum {
  Standard,
  NoArrows,
  Lightshow,
  Lawless,
}
