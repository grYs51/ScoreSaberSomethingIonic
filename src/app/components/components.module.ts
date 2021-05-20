import { ViewPlayerProfileComponent } from './view-player-profile/view-player-profile.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SliderSongsComponent } from './slider-songs/slider-songs.component';
import { ProfileModule } from './profile/profile.module';
import { BeatSaverModule } from './BeatSaver/beat-saver.module';
@NgModule({
  declarations: [SliderSongsComponent, ViewPlayerProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    ProfileModule,
    BeatSaverModule,
  ],
  exports: [SliderSongsComponent, ViewPlayerProfileComponent, ProfileModule, BeatSaverModule],
  providers: [NativePageTransitions]
})
export class ComponentsModule { }
