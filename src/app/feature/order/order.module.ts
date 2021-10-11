import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { OrderService } from './shared/services/order.service';
import { CoreModule } from '@core/core.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreateOrderComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    CoreModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
