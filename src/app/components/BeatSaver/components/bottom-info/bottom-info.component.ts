import { Characteristic } from './../../../../Interfaces/BeatSaver/Map/Metadata/Characteristic';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'beatsaver-bottom-info',
  templateUrl: './bottom-info.component.html',
  styleUrls: ['./bottom-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomInfoComponent implements OnInit {

  @Input() characteristics: Characteristic[];
  @Input() duration: number;

  select;
  selected;
  selectedCharacteristic = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.characteristics);
    for (let i = 0; i < this.characteristics.length; i++) {
      if (this.characteristics[i].name === CharacteristicEnum[0]) {
        this.selectedCharacteristic = i;
      }
    }
  }

  onChangeObj(value) {
    this.selected = value.charAt(0).toLowerCase() + value.slice(1);
    if (value === 'Expertplus') {
      this.selected = 'expertPlus';
    }
  }

  filterButton(characteristic: number) {
    if (this.selectedCharacteristic !== characteristic) {
      this.selectedCharacteristic = characteristic;
      this.select = null;
      this.selected = null;
    }
  }
}

enum CharacteristicEnum {
  Standard,
  NoArrows,
  Lightshow,
  Lawless,
}
