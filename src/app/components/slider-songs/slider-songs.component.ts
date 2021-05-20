import { IScoresPage } from './../../Interfaces/ScoreSaber/Scores/ScoresPage';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-slider-songs',
  templateUrl: './slider-songs.component.html',
  styleUrls: ['./slider-songs.component.css']
})
export class SliderSongsComponent implements OnInit {
  @Input() name: string;
  @Input() songs: IScoresPage;
  constructor() { }

  ngOnInit(): void {
  }

}
