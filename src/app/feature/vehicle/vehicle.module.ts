import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';
import { VehicleService } from './shared/services/vehicle.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateVehicleComponent,
    UpdateVehicleComponent,
    ListVehicleComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    VehicleService
  ]
})
export class VehicleModule { }
