import { RatingDecimalPipe } from './pipes/rating-decimal.pipe';
import { VirtualListIndexPipe } from './pipes/virtual-list-index.pipe';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [VirtualListIndexPipe, RatingDecimalPipe],
  imports: [
    CommonModule
  ],
  exports: [VirtualListIndexPipe, RatingDecimalPipe]
})
export class PipesModule { }
