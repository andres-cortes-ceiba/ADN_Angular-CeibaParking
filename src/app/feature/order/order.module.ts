import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { OrderService } from './shared/services/order.service';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { VehicleService } from '@shared/services/vehicle.service';
import { ParkingLotService } from '@shared/services/parking-lot.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateOrderComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    RouterModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    OrderService,
    VehicleService,
    ParkingLotService
  ]
})
export class OrderModule { }
