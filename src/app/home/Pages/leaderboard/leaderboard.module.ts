import { ProfileComponentsModule } from 'src/app/components/profile/components/components.module';
import { LeaderboardPage } from './leaderboard.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: LeaderboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ProfileComponentsModule
  ],
  declarations: [LeaderboardPage]
})
export class LeaderboardPageModule {}
