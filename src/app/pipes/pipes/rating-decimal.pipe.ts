import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingDecimal',
})
export class RatingDecimalPipe implements PipeTransform {
  transform(value: string | number): number | string {
    if (Number(+value)) {
      return Math.round(+value * 100);
    } else {
      return '?';
    }
  }
}
