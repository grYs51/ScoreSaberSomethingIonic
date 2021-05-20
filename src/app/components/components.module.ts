import { ViewPlayerProfileComponent } from './view-player-profile/view-player-profile.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SliderSongsComponent } from './slider-songs/slider-songs.component';
import { BeatMapItemComponent } from './BeatSaver/beat-map-item/beat-map-item.component';
import { BeatMapPagePage } from './BeatSaver/beat-map-page/beat-map-page.page';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { ProfileModule } from './profile/profile.module';
@NgModule({
  declarations: [SliderSongsComponent, BeatMapPagePage, BeatMapItemComponent, ViewPlayerProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
    ProfileModule
  ],
  exports: [SliderSongsComponent, BeatMapItemComponent, BeatMapItemComponent, ProfileModule, ViewPlayerProfileComponent],
  providers: [NativePageTransitions]
})
export class ComponentsModule { }
