import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerItemComponent } from './player-item/player-item.component';
import { IonicModule } from '@ionic/angular';
import { ViewPlayerProfileComponent } from './view-player-profile/view-player-profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileSubHeaderComponent } from './profile-sub-header/profile-sub-header.component';
import { SliderSongsComponent } from './slider-songs/slider-songs.component';



@NgModule({
  declarations: [PlayerItemComponent, ViewPlayerProfileComponent, ProfileHeaderComponent, ProfileSubHeaderComponent, SliderSongsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PlayerItemComponent, ProfileHeaderComponent, ProfileSubHeaderComponent,SliderSongsComponent],
  providers: [NativePageTransitions]
})
export class ComponentsModule { }
