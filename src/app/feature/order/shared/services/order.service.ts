import { Injectable } from '@angular/core';
import { Order } from '@core/modelo/order';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class OrderService {

  constructor(
    private http: HttpService,
  ) { }

  createOrder(order: any) {
    order.start = new Date();
    return this.http.doPost<Order, boolean>('/order', order);
  }

  calcPrice(order: Order) {
    const hours = Math.ceil((order.end.getTime() - order.start.getTime()) / 3600000);
    console.log(hours);
    if (order.start.getDay() === 0 || order.start.getDay() === 6) {
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

  setStart(order: Order) {
    return this.http.doPatch<{start: Date}, boolean>(
      '/order/' + order.id,
      {
        start: new Date()
      }
    );
  }

  setStatus(order: Order) {
    this.http.doPatch('/vehicle/' + order.vehicle.id, { parked: false }).toPromise();
    this.http.doPatch('/parking_lot/' + order.parking_lot.id, { available: true, vehicle: order.vehicle }).toPromise();
  }

  async clearStatus(order: Order) {
    await this.http.doPatch('/vehicle/' + order.vehicle.id, { parked: false }).toPromise();
    await this.http.doPatch('/parking_lot/' + order.parking_lot.id, { available: true, vehicle: null }).toPromise();
  }

  setPrice(order: Order) {
    return this.http.doPatch<{price: number}, boolean>(
      '/order/' + order.id,
      {
        price: this.calcPrice(order)
      }
    );
  }

  endOrder(order: Order) {
    return this.http.doPatch<{end: Date}, boolean>(
      '/order/' + order.id,
      {
        end: new Date()
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
