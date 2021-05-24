import { ProfileComponentsModule } from 'src/app/components//profile/components/components.module'
import { ComponentsModule } from './../../../components/add-player/components/components.module';
import { AddPlayerModule } from './../../../components/add-player/add-player.module';
import { FriendsPage } from './friends.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: FriendsPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AddPlayerModule,
    ComponentsModule,
    ProfileComponentsModule
  ],
  declarations: [FriendsPage]
})
export class FriendsPageModule { }
