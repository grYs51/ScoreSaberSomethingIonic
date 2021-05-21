import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IProfilePlayerInfo } from 'src/app/Interfaces/ScoreSaber/Profile/ProfilePlayerInfo';
import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'player-add-item',
  templateUrl: './player-add-item.component.html',
  styleUrls: ['./player-add-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerAddItemComponent implements OnInit {

  @Input() playerInfo: IProfilePlayerInfo;
  @Output() public buttonClicked = new EventEmitter<IStoredUser>();
  constructor() { }

  ngOnInit(): void {
  }

  button() {
    this.buttonClicked.emit(this.makeStoredUser());
  }

  makeStoredUser(): IStoredUser {
    return {
      id: this.playerInfo.playerId,
      name: this.playerInfo.playerName,
      avatar: this.playerInfo.avatar,
      country: this.playerInfo.country
    };
  }
}
