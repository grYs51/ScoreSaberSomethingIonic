import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IFullProfile } from 'src/app/Interfaces/ScoreSaber/Profile/FullProfile';
import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';
import { ScoreSaberRegexService } from 'src/app/Shared/Services/Extensions/score-saber-regex.service';
import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-api.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddPlayerComponent implements OnInit {
  Input = '';
  user: IFullProfile = null;
  constructor(private SSRegex: ScoreSaberRegexService, private scoreSaberSrv: ScoreSaberService) { }
  @Output() public buttonClicked = new EventEmitter<IStoredUser>();
  ngOnInit(): void {
  }

  async checkRegex(input: string) {
    this.user = null;
    this.Input = input;
    const id = this.SSRegex.checkId(input);

    if (id) {
      try {
        this.user = await this.scoreSaberSrv.FetchFullPlayerProfile(id);
      } catch (e) {
        console.log('No user with this id');
      }
      console.log('userData', id);
    }
  }

  AddPlayer(storedUser: IStoredUser) {
    this.buttonClicked.emit(storedUser);
  }

}
