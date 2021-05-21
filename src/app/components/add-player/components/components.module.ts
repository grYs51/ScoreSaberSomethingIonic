import { PlayerAddItemComponent } from './player-add-item/player-add-item.component';
import { GhostPlayerItemComponent } from './ghost-player-item/ghost-player-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [ GhostPlayerItemComponent, PlayerAddItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
  ],
  exports: [ GhostPlayerItemComponent, PlayerAddItemComponent]
})
export class ComponentsModule { }
