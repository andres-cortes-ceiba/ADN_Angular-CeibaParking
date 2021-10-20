import { Injectable } from '@angular/core';
import { Order } from '@core/modelo/order';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrderService {

  constructor(
    private http: HttpService,
  ) { }

  createOrder(order: Order) {
    this.http.doPatch('/vehicle/' + order.vehicle.id, {parked: true}).toPromise();
    this.http.doPatch('/parking_lot/' + order.parking_lot.id, {available: false}).toPromise();
    return this.http.doPost<Order, boolean>('/order', order);
  }

  calcPrice(order: Order) {
    const start = new Date(order.start);
    const hours = Math.ceil((order.end.getTime() - start.getTime()) / 3600000);
    if (start.getDay() === 0 || start.getDay() === 6) {
      if (order.vehicle.vehicle_type === 'car') {
        return hours * environment.weekendCarHourPrice;
      } else {
        return hours * environment.weekendMotorcycleHourPrice;
      }
    } else {
      if (hours >= 8) {
        if (order.vehicle.vehicle_type === 'car') {
          return environment.dayCarPrice;
        } else {
          return environment.dayMotorcyclePrice;
        }
      } else {
        if (order.vehicle.vehicle_type === 'car') {
          return hours * environment.carHourPrice;
        } else {
          return hours * environment.motorcycleHourPrice;
        }
      }
    }
  }

  setPrice(order: Order) {
    const servicePrice = this.calcPrice(order);
    return this.http.doPatch<{price: number}, boolean>(
      '/order/' + order.id,
      {
        price: servicePrice
      }
    );
  }

  endOrder(order: Order) {
    this.http.doPatch('/vehicle/' + order.vehicle.id, {parked: false}).toPromise();
    this.http.doPatch('/parking_lot/' + order.parking_lot.id, {available: true}).toPromise();
    return this.http.doPatch<{end: Date}, boolean>(
      '/order/' + order.id,
      {
        end: order.end
      }
    );
  }

  getOrder(orderId: number) {
    return this.http.doGet<Order>('/order/' + orderId);
  }

  getOrders() {
    return this.http.doGet<Order[]>('/order');
  }

}
