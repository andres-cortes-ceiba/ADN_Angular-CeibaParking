import { Injectable } from '@angular/core';
import { Order } from '@core/modelo/order';
import { HttpService } from '@core/services/http.service';

@Injectable()
export class OrderService {

  constructor(
    private http: HttpService
  ) { }

  createOrder(order: Order) {
    return this.http.doPost<Order, boolean>('/parking_lot', order);
  }

  getOrder(orderId: number) {
    return this.http.doGet<Order>('/parking_lot/' + orderId);
  }

  getOrders() {
    return this.http.doGet<Order[]>('/parking_lot/');
  }

}
