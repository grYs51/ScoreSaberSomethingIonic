import { UserDataService } from './../../../Shared/Services/ScoreSaber/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.css'],
})
export class SettingsPage implements OnInit {
  firstName;
  constructor(private location: Location, public UserData: UserDataService) {
    console.log(this.UserData);
  }

  ngOnInit(): void { }

  dismiss() {

  }
}
