import { Component, Input, OnInit } from '@angular/core';
import { PlanesService } from 'src/app/services/planes.service';
import { Planes, AddPlanResult, DeleteItem, GetCart } from '../../interfaces/planes';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Input() carritoActivo = false;
  planes: any;
  carrito: any;
  selected: any = {};

  constructor(
    private planesservice: PlanesService
  ) {
    this.planesservice.getPlanes().subscribe(plans => {
      this.planes = plans.response.planes;
    });
    this.planesservice.getCarrito().subscribe(plans => {
      this.carrito = plans.response;
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
    const selectedPlan = this.planes[plan].periodos[this.selected[plan]]
    this.planesservice.addPlanToCart(Plan, selectedPlan.periodo).subscribe(item => {
      if (item.result === true) {
        this.carrito.push({
          id_producto: item.response.id_producto,
          nombre: nombrePlan,
          plan: Plan,
          valor: selectedPlan.valor,
          periodo: selectedPlan.periodo
        });
        alert('Plan agregado al carrito');
      } else {
        alert(item.error);
      }
    });
  }
}
