import { Component, OnInit } from '@angular/core';
import { Order } from '@core/modelo/order';
import { OrderService } from './../../shared/services/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.sass']
})
export class ListOrderComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orders$ = this.orderService.getOrders();
  }

  endService(order: Order) {
    this.orderService.endOrder(order).subscribe(() => {
      this.getOrders();
    });
  }

}
