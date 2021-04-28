import { Pipe, PipeTransform } from '@angular/core';
import { Reservar } from '../models/reservar.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(reservar: any[] , texto: string): Reservar[] {
   
    console.log(reservar);
    if ( texto.length === 0 ){ return reservar;}
    texto = texto.toLocaleLowerCase();

       return reservar.filter( item => {
      return item.fecha.toLocaleLowerCase().includes(texto);     
    });
  }

}