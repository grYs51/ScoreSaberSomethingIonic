import { ISongScore } from 'src/app/Interfaces/ScoreSaber/Scores/SongScore';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-badges',
  templateUrl: './profile-badges.component.html',
  styleUrls: ['./profile-badges.component.css']
})
export class ProfileBadgesComponent implements OnInit {

  @Input() Scores: ISongScore[];

  rankedMaps: ISongScore[];
  averageScore: any;

  constructor() { }

  ngOnInit(): void {
    this.getRankedMaps();
    this.getAverage();
  }
  getAverage() {
    this.averageScore = this.rankedMaps.reduce(
      (p, c) =>
        p + c.score, 0) / this.rankedMaps.reduce(
        (p, c) =>
          p + c.maxScore, 0);
    console.log(this.averageScore);
  }

  getRankedMaps() {
    this.rankedMaps = Object.values(this.Scores).filter(s => s.pp > 0);
  }

}
