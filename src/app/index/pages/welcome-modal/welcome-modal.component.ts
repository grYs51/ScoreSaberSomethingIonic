import { IFullProfile } from './../../../Interfaces/ScoreSaber/Profile/FullProfile';
import { UserDataService } from './../../../Shared/Services/ScoreSaber/user-data.service';
import { ScoreSaberService } from './../../../Shared/Services/ScoreSaber/score-saber-service.service';
import { ScoreSaberRegexService } from './../../../Shared/Services/Extenstions/score-saber-regex.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css'],
})
export class WelcomeModalComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  Input: string = '';
  user: IFullProfile = null;
  isTyping: boolean = false;

  subscription: Subscription;

  constructor(
    public viewCtrl: ModalController,
    private SSRegex: ScoreSaberRegexService,
    private scoreSaberSrv: ScoreSaberService,
    public userData: UserDataService,
    private toastController: ToastController
  ) {
    console.log(this.user);
  }

  ngOnInit(): void {}
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  dismiss() {
    this.viewCtrl.dismiss(this.user );
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    currentIndex.then(async (res) => {
      if (res > 1 && !this.user) {
        console.log('f');
        const toast = await this.toastController.create({
          color: 'danger',
          header: 'Wait!',
          message:
            "Are you sure you don't want to add a ScoreSaber profile?\nYou will miss out some awesome features.",
          duration: 7500,
          buttons: [
            {
              text: 'Add',
              role: 'bottom',
              handler: () => {
                this.slides.slideTo(1, 500);
              },
            },
          ],
        });
        toast.present();
      }
    });
  }

  async checkRegex(input) {
    this.Input = input;
    let id = this.SSRegex.checkid(input);

    if (id) {
      try {
        this.user = await this.scoreSaberSrv.FetchFullPlayerProfile(id);
      } catch (e) {
        console.log('hitting rate-limit');
      }
      console.log('userData', this.user);
    }
  }
}
