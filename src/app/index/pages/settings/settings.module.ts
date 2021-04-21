import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SettingsPage } from './settings.page';


const routes: Routes = [
    {
    path: '',
    component: SettingsPage
    }
];

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes)
      ],
    declarations: [SettingsPage],
  })
  export class SettingsPageModule { }
  