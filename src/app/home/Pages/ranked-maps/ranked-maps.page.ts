import { OldScoreSaberApiService } from './../../../Shared/Services/ScoreSaber/old-score-saber-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './ranked-maps.page.html',
  styleUrls: ['./ranked-maps.page.css'],
})
export class RankedMapsPage implements OnInit {
  constructor(private oldScoreSaberApiService: OldScoreSaberApiService) {}
  flag = null;
  ngOnInit(): void {}

  onClick() {
    this.oldScoreSaberApiService.getLeaderBoard().subscribe(
      (res) => {
        this.flag=true;
        console.log(res);
      },
      (error) => {
        this.flag=false;
        console.log(error)
      }
    );
  }
}
