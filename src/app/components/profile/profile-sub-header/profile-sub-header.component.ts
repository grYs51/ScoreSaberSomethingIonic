import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile-sub-header',
  templateUrl: './profile-sub-header.component.html',
  styleUrls: ['./profile-sub-header.component.css']
})
export class ProfileSubHeaderComponent implements OnInit {
  @Input() pp: number;
  @Input() rank: number;
  @Input() avgAcc: number;

  constructor() { }

  ngOnInit(): void {
  }
}
