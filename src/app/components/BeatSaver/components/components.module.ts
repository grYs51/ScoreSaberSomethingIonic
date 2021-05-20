import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SmallInfoComponent } from './small-info/small-info.component';
import { BottomInfoComponent } from './bottom-info/bottom-info.component';
import { DescriptionComponent } from './description/description.component';



@NgModule({
  declarations: [TitleComponent, SmallInfoComponent, BottomInfoComponent, DescriptionComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
  ],
  exports: [TitleComponent, SmallInfoComponent, BottomInfoComponent, DescriptionComponent]
})
export class ComponentsModule { }
