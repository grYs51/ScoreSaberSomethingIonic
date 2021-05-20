import { IStoredUser } from './../../../Interfaces/StoringData/StoreUser';
import { IonicStorageService } from './../../../Shared/Services/Storage/ionic-storage.service';
import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { ProfileMethodsService } from './profile-methods.service';
import { UserDataService } from './../../../Shared/Services/ScoreSaber/user-data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { WelcomeModalComponent } from 'src/app/index/pages/welcome-modal/welcome-modal.component';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {
  constructor(
    private modalController: ModalController,
    public userDataSrv: UserDataService,
    public profileSrv: ProfileMethodsService,
    private ionicStorage: IonicStorageService,
    private toast: ToastController
  ) { }

  cachedUser: Observable<IFullProfile>;
  profileKey: 'profile-cache';
  storedUser: IStoredUser = null;
  user: IFullProfile = null;

  // flags
  hasFullProfileLoaded = false;

  async ngOnInit(): Promise<void> {
    this.storedUser = await this.ionicStorage.GetUserFromStorage();

    if (!this.storedUser) {
      this.openModal();
    } else {
      // caching
      await this.profileSrv.GetProfile(this.storedUser.id);
      await this.preset(this.storedUser.id);
      const toast = await this.toast.create({
        position: 'top',
        message: 'API request Done.',
        duration: 2000,
      });
      toast.present();
    }
  }

  async preset(userId: string) {
    await this.profileSrv.GetFirstPageTopScore(userId);
    await this.profileSrv.GetFirstPageRecentScore(userId);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: WelcomeModalComponent,
    });
    await modal.present();

    modal.onDidDismiss().then((data) => {
      let obj: IFullProfile;
      obj = data.data;
      this.preset(obj.playerInfo.playerId);
      this.storedUser = this.ionicStorage.StoreUser(obj);
    });
  }

  async getAllScores() {
    this.profileSrv.getTotalPages();
    await this.profileSrv.GetAllScores(this.storedUser.id);
  }

  async doRefresh(event) {
    await this.profileSrv.GetProfile(this.storedUser.id);
    await this.preset(this.storedUser.id);
    event.target.complete();
  }
}
