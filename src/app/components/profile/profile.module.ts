import { ProfileComponentsModule } from './components/components.module';
import { ViewPlayerProfileComponent } from './view-player-profile/view-player-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
@NgModule({
  declarations: [
    ViewPlayerProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
    ProfileComponentsModule
  ],
  exports: [
    ViewPlayerProfileComponent
  ]
})
export class ProfileModule { }
