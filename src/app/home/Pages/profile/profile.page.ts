import { UserDataService } from './../../../Shared/Services/ScoreSaber/user-data.service';
import { LocalStorageServiceService } from './../../../Shared/Services/Storage/local-storage-service.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WelcomeModalComponent } from 'src/app/index/pages/welcome-modal/welcome-modal.component';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {
  constructor(
    private modalController: ModalController,
    public userDataSrv: UserDataService,
    private localstorage: LocalStorageServiceService
  ) {}

  userId: string;

  //flags
  hasFullProfileLoaded: boolean = false;
  isLoading: boolean = false;

  //pages
  pages: number = 1;
  loadedPages: number = 0;

  ngOnInit(): void {
    if (!this.userDataSrv.User) {
      this.openModal();
    } else {
      this.pages = Math.ceil(
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
  getAllScores() {
    this.isLoading = true;
  }
}
