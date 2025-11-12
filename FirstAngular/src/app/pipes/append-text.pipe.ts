import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText',
  standalone: true
})
export class AppendTextPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: unknown, suffixVal: string): string {
    return value + ` (${suffixVal})`;
  }

}
