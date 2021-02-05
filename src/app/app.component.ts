import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-angular';
  cart = 0;
  carritoActivo = false;
  filtro = '';

  cambioEstadoCarrito(): void{
    this.carritoActivo = !this.carritoActivo;
  }
  sumarAlCarrito(): void{
    this.cart++;
  }
  restarAlCarrito(): void{
    this.cart--;
  }
  buscar(filtro: string): void{
    this.filtro = filtro;
  }
}
