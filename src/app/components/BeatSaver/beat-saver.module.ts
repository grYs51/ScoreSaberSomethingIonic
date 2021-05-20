import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeatMapItemComponent } from './beat-map-item/beat-map-item.component';
import { BeatMapPagePage } from './beat-map-page/beat-map-page.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [BeatMapPagePage, BeatMapItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [BeatMapItemComponent, BeatMapItemComponent]
})
export class BeatSaverModule { }
