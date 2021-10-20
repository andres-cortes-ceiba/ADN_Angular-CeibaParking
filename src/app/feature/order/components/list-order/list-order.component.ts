import { Component, OnInit } from '@angular/core';
import { Order } from '@core/modelo/order';
import { OrderService } from './../../shared/services/order.service';
import { Observable } from 'rxjs';
//import { VehicleService } from '@shared/services/vehicle.service';
//import { ParkingLotService } from '@shared/services/parking-lot.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.sass']
})
export class ListOrderComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(
    private orderService: OrderService,
    //private vehicleService: VehicleService,
    //private parkingLotService: ParkingLotService
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orders$ = this.orderService.getOrders();
  }

  endService(order: Order) {
    order.vehicle.parked = true;
    order.parking_lot.available = false;
    order.end = new Date();
    // this.vehicleService.editVehicle(order.vehicle).subscribe( () => {
    //   this.parkingLotService.editParkingLot(order.parking_lot).subscribe( () => {
    //     this.orderService.endOrder(order).subscribe( () => {
    //       this.orderService.setPrice(order).subscribe( () => {
    //         this.getOrders();
    //       });
    //     });
    //   });
    // });
    // concat(
    //   this.vehicleService.editVehicle(order.vehicle),
    //   this.parkingLotService.editParkingLot(order.parking_lot)
    // ).subscribe( () => {
    //   concat(
    //     this.orderService.endOrder(order),
    //     this.orderService.setPrice(order)
    //   ).subscribe( () => {
    //     this.getOrders();
    //   });
    // });
  }

}
