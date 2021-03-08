import { ProfileMethodsService } from './profile-methods.service';
import { UserDataService } from './../../../Shared/Services/ScoreSaber/user-data.service';
import { LocalStorageService } from '../../../Shared/Services/Storage/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WelcomeModalComponent } from 'src/app/index/pages/welcome-modal/welcome-modal.component';
import { ScoreSaberService } from 'src/app/Shared/Services/ScoreSaber/score-saber-service.service';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {
  constructor(
    private modalController: ModalController,
    public userDataSrv: UserDataService,
    private localstorage: LocalStorageService,
    public profilesrv: ProfileMethodsService
  ) {}

  userId: string;

  //flags
  hasFullProfileLoaded: boolean = false;
  

  //pages
  totalPages: number = 1;
  

  ngOnInit(): void {
    if (!this.userDataSrv.User) {
      this.openModal();
    } else {
      this.userId = this.userDataSrv.User.playerInfo.playerId;
      this.totalPages = Math.ceil(
        this.userDataSrv.User.scoreStats.totalPlayCount / 8
      );
    }
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: WelcomeModalComponent,
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      this.localstorage.StoreUser(data.data);
    });
  }
  async getAllScores() {
    this.profilesrv.GetAllScores(this.userId, this.totalPages)
  }
}
