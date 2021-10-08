import { Order } from "@core/modelo/order";
import { of } from 'rxjs';
import { OrderMock, OrderArrayMock } from './order.mock';

export class OrderServiceMock {

    createOrder(order: Order) {
        if (order) {
            return of(true);
        }
    }

    getOrder(orderId: number) {
        orderId = 1;
        if (orderId) {
            return of(OrderMock);
        }
    }

    getOrders() {
        return of(OrderArrayMock);
    }

}