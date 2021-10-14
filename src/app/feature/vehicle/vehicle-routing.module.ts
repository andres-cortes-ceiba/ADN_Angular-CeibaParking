import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle.component';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'list-vehicle',
    pathMatch: 'full'
  },
  {
    path: 'list-vehicle',
    component: ListVehicleComponent,
  },
  {
    path: 'create-vehicle',
    component: CreateVehicleComponent,
  },
  {
    path: 'update-vehicle/:id',
    component: UpdateVehicleComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
