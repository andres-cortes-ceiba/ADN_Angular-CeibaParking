import { Injectable } from '@angular/core';
import { Order } from '@core/modelo/order';
import { HttpService } from '@core/services/http.service';

@Injectable()
export class OrderService {

  constructor(
    private http: HttpService
  ) { }

  createOrder(order: any) {
    return this.http.doPost<Order, boolean>('/order', order);
  }

  getOrder(orderId: number) {
    return this.http.doGet<Order>('/order/' + orderId);
  }

  getOrders() {
    return this.http.doGet<Order[]>('/order');
  }

}
