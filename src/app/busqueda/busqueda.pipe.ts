import { Pipe, PipeTransform } from '@angular/core';
import { Gasto } from '../models/balancegastos.model';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(gastos: any[] , texto: string): Gasto[] {
    

    console.log(gastos);
    if ( texto.length === 0 ){ return gastos;}
    texto = texto.toLowerCase();

       return gastos.filter( item => {
      return item.fecha.toLowerCase().includes(texto);     
    });
  }

}