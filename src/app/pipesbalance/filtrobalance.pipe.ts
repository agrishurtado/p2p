import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrobalance'
})
export class FiltrobalancePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
