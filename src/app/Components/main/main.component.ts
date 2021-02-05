import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';
import { FiltroNombrePipe } from 'src/app/pipes/filtro-nombre.pipe';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Input() carritoActivo = false;
  @Input() filtro = '';
  @Output() sumarAlCarrito = new EventEmitter();
  @Output() restarAlCarrito = new EventEmitter();
  planes: any;
  carrito: any;
  selected: any = {};

  constructor(
    private planesservice: PlanesService
  ) {
    this.planesservice.getPlanes().subscribe((plans: { response: { planes: any; }; }) => {
      this.planes = plans.response.planes;
    });
    this.planesservice.getCarrito().subscribe((plans: { response: any; }) => {
      this.carrito = plans.response;
      console.log(plans);
    });
  }

  ngOnInit(): void {
  }
  selectChangeHandler(event: any, plan: number): void {
    this.selected[plan] = event.target.value;
  }
  agregar(plan: number): void {
    const Plan = (this.planes[plan].plan);
    const nombrePlan = (this.planes[plan].nombre);
    const selectedPlan = this.planes[plan].periodos[this.selected[plan]];
    this.planesservice.addPlanToCart(Plan.toString(), selectedPlan.periodo.toString()).subscribe((item:
      {
        result: boolean;
        response: { id_producto: any; };
        error: any;
      }
    ) => {
      if (item.result === true) {
        if (Array.isArray(this.carrito)) {
          this.carrito.push({
            id_producto: item.response.id_producto,
            nombre: nombrePlan,
            plan: Plan,
            valor: selectedPlan.valor,
            periodo: selectedPlan.periodo
          });
        } else {
          this.carrito = [
            {
              id_producto: item.response.id_producto,
              nombre: nombrePlan,
              plan: Plan,
              valor: selectedPlan.valor,
              periodo: selectedPlan.periodo
            }
          ];
        }
        console.log(this.carrito);
        this.sumarAlCarrito.emit();
        console.log('Plan agregado al carrito');
        console.log(item.error);
      } else {
        console.log(item.error);
      }
    });
  }

  eliminarItem(i: number): void {
    this.planesservice.deleteItem(this.carrito[i].id_producto).subscribe((item: { result: boolean; error: any; }) => {
      if (item.result === true) {
        this.restarAlCarrito.emit();
        alert(this.carrito[i].nombre + ' eliminado del carrito');
        this.carrito.splice(i, 1);
      } else {
        alert(item.error);
      }
    });
  }
}
