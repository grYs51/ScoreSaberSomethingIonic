import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() name: string;
  @Input() avatar: string;
  @Input() country: string;

  constructor() { }

  ngOnInit(): void {
  }

}
