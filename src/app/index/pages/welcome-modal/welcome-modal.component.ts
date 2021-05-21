import { IStoredUser } from 'src/app/Interfaces/StoringData/StoreUser';
import { UserDataService } from './../../../Shared/Services/ScoreSaber/user-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css'],
})
export class WelcomeModalComponent implements OnInit {

  constructor(
    public viewCtrl: ModalController,
    public userData: UserDataService,
    private toastController: ToastController
  ) { }

  @ViewChild(IonSlides) slides: IonSlides;

  Input = '';
  user: IStoredUser = null;
  isTyping = false;

  subscription: Subscription;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  ngOnInit(): void { }

  dismiss() {
    this.viewCtrl.dismiss(this.user);
  }

  slideChanged() {
    const currentIndex = this.slides.getActiveIndex();
    currentIndex.then(async (res) => {
      if (res > 1 && !this.user) {
        const toast = await this.toastController.create({
          color: 'danger',
          header: 'Wait!',
          message:
            'Are you sure you don\'t want to add a ScoreSaber profile?\nYou will miss out some awesome features.',
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

  test(test: IStoredUser) {
    this.user = test;
    this.slides.slideTo(2, 500);
    console.log(test);
  }
}
