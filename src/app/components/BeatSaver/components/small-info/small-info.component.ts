import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Stats } from 'src/app/Interfaces/BeatSaver/Map/Stats';

@Component({
  selector: 'beatsaver-small-info',
  templateUrl: './small-info.component.html',
  styleUrls: ['./small-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallInfoComponent implements OnInit {
  @Input() duration: number;
  @Input() bpm: number;
  @Input() stats: Stats;

  constructor() { }

  ngOnInit(): void {
  }

}
