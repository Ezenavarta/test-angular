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

  cambioEstadoCarrito(): void{
    this.carritoActivo = !this.carritoActivo;
  }
}
