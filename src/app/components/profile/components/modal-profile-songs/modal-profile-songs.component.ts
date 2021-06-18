import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-profile-songs',
  templateUrl: './modal-profile-songs.component.html',
  styleUrls: ['./modal-profile-songs.component.css']
})
export class ModalProfileSongsComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit(): void {
  }
  async dismiss(){
    const modal = await this.modalCtrl.getTop();
    modal.dismiss();
  }

}
