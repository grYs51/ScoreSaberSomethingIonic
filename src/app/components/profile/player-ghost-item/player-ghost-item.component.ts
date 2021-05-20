import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-ghost-item',
  templateUrl: './player-ghost-item.component.html',
  styleUrls: ['./player-ghost-item.component.css']
})
export class PlayerGhostItemComponent implements OnInit {

  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
