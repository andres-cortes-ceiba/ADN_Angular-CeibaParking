import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { OrderService } from './shared/services/order.service';


@NgModule({
  declarations: [
    CreateOrderComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
