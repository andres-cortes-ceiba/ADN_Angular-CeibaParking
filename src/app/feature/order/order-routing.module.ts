import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ListOrderComponent } from './components/list-order/list-order.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'list-order',
    pathMatch: 'full'
  },
  {
    path: 'list-order',
    component: ListOrderComponent,
  },
  {
    path: 'create-order',
    component: CreateOrderComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
