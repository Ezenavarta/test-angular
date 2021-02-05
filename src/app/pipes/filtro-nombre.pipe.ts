import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroNombre',
  pure: false
})
export class FiltroNombrePipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => this.quitarAcentos(item.nombre.toUpperCase()).indexOf(this.quitarAcentos(filter.toUpperCase())) !== -1);
  }
  quitarAcentos(cadena: string): string{
    const acentos: any = { 'Á': 'A','É': 'E','Í': 'I','Ó': 'O','Ú': 'U'};
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();
  }
}
