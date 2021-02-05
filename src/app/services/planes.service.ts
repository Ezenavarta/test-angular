import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planes, AddPlanResult, DeleteItem, GetCart } from '../interfaces/planes';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private http: HttpClient) {
  }
  getPlanes(): any {
    return this.http.get<Planes>('http://c1300044.ferozo.com/getListado.php');
  }
  getCarrito(): any {
    return this.http.get<GetCart>('http://c1300044.ferozo.com/getListadoCarrito.php?' + Math.random());
    // una chanchadita para que recargue el carrito*/
  }
  addPlanToCart(plan: string, period: number): any {
    return this.http.get<AddPlanResult>(
      'http://c1300044.ferozo.com/agregarItem.php?plan=' + plan + '&periodo=' + period + '&' + Math.random()
      );
  }
  deleteItem(idItem: number): any {
    return this.http.get<DeleteItem>('http://c1300044.ferozo.com/removerItem.php?id_producto=' + idItem);
  }


}
