import { ViewPlayerProfileComponent } from './view-player-profile/view-player-profile.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SliderSongsComponent } from './slider-songs/slider-songs.component';
import { ProfileModule } from './profile/profile.module';
import { BeatSaverModule } from './BeatSaver/beat-saver.module';
import { AddPlayerModule } from './add-player/add-player.module';
@NgModule({
  declarations: [SliderSongsComponent, ViewPlayerProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    ProfileModule,
    BeatSaverModule,
    AddPlayerModule,
  ],
  exports: [SliderSongsComponent, ViewPlayerProfileComponent, ProfileModule, BeatSaverModule, AddPlayerModule ],
  providers: [NativePageTransitions]
})
export class ComponentsModule { }
