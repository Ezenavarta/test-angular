import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planes, AddPlanResult, DeleteItem, GetCart } from '../interfaces/planes';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private http: HttpClient) {
  }
  getPlanes() {
    return this.http.get<Planes>(
      'http://c1300044.ferozo.com/getListado.php'
      );
  }
  getCarrito(){
    return this.http.get<GetCart>(
      'http://c1300044.ferozo.com/getListadoCarrito.php'
      );
  }
  addPlanToCart(plan: string, period: number){
    return this.http.get<AddPlanResult>(
      'http://c1300044.ferozo.com/agregarItem.php?plan=' + plan + '&periodo=' + period
      );
  }
  deleteItem(idItem: number){
    return this.http.get<DeleteItem>('http://c1300044.ferozo.com/removerItem.php?id_producto=' + idItem);
  }


}
