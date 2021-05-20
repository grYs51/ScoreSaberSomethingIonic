import { ProfileSubHeaderComponent } from './profile-sub-header/profile-sub-header.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileBadgesComponent } from './profile-badges/profile-badges.component';
import { PlayerItemComponent } from './player-item/player-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PlayerGhostItemComponent } from './player-ghost-item/player-ghost-item.component';



@NgModule({
  declarations: [PlayerItemComponent, ProfileBadgesComponent, ProfileHeaderComponent, ProfileSubHeaderComponent, PlayerGhostItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule
  ],
  exports: [PlayerItemComponent, ProfileBadgesComponent, ProfileHeaderComponent, ProfileSubHeaderComponent, PlayerGhostItemComponent]
})
export class ProfileModule { }
