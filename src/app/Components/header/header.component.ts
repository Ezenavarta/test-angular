import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {

  @Input() cart = 0;
  @Input() carritoActivo = false;
  @Output() cambioEstadoCarrito = new EventEmitter();
  @Output() buscar = new EventEmitter();
  nombre = 'soy el nombre';
  filtro = '';

  constructor() {
    console.log('antes');
  }

  ngOnInit(): void {
    console.log('despues');
  }

  irAlCarrito(): void{
    this.cambioEstadoCarrito.emit();
  }
  filtrar(): void{
    this.buscar.emit(this.filtro);
  }
}
