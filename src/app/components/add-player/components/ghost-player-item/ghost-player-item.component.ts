import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ghost-player-item',
  templateUrl: './ghost-player-item.component.html',
  styleUrls: ['./ghost-player-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GhostPlayerItemComponent implements OnInit {

  constructor() { }
  @Input() flag: boolean;

  ngOnInit(): void {
  }
}
