import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'beatsaver-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent implements OnInit {

  @Input() name: string;
  @Input() levelAuthorName: string;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
