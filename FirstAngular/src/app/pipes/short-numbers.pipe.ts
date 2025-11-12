import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNumbers',
  standalone: true,
  pure: false
})
export class ShortNumbersPipe implements PipeTransform {

  transform(value: number[], sortOrder: 'asc' | 'desc'): number[] {
    debugger;
    if (sortOrder === 'asc') {
      return value.sort((a, b) => a - b);
    } else {
      return value.sort((a, b) => b - a);
    }
  }

}
