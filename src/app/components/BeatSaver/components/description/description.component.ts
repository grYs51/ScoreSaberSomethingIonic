import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'beatsaver-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent implements OnInit {

  @Input() name: string;
  @Input() key: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
