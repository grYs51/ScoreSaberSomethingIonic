import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerItemComponent } from './player-item/player-item.component';
import { IonicModule } from '@ionic/angular';
import { ViewPlayerProfileComponent } from './view-player-profile/view-player-profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileSubHeaderComponent } from './profile-sub-header/profile-sub-header.component';
import { SliderSongsComponent } from './slider-songs/slider-songs.component';
import { BeatMapItemComponent } from './BeatSaver/beat-map-item/beat-map-item.component';
import { BeatMapPagePage } from './BeatSaver/beat-map-page/beat-map-page.page';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlayerItemComponent, ViewPlayerProfileComponent, ProfileHeaderComponent, ProfileSubHeaderComponent, SliderSongsComponent,BeatMapPagePage, BeatMapItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule
  ],
  exports: [PlayerItemComponent, ProfileHeaderComponent, ProfileSubHeaderComponent,SliderSongsComponent, BeatMapItemComponent, BeatMapItemComponent],
  providers: [NativePageTransitions]
})
export class ComponentsModule { }
