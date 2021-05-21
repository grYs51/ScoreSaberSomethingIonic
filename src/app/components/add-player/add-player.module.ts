import { AddPlayerComponent } from './addplayer/addplayer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [ AddPlayerComponent ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [ AddPlayerComponent ]
})
export class AddPlayerModule { }
