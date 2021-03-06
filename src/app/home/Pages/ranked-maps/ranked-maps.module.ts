import { RankedMapsPage } from './ranked-maps.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';



const routes: Routes = [
  {
    path: '',
    component: RankedMapsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RankedMapsPage]
})
export class RankedMapsPageModule {}