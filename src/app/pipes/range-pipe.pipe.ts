import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipePipe implements PipeTransform {
  transform(value: number): Array<number> {
    return Array(value);
  }
}
