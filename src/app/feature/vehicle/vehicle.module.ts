import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { CreateVehicleComponent } from './components/create-vehicle/create-vehicle.component';
import { UpdateVehicleComponent } from './components/update-vehicle/update-vehicle.component';
import { ListVehicleComponent } from './components/list-vehicle/list-vehicle.component';
import { VehicleService } from './shared/services/vehicle.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';
import { HttpClientModule } from '@angular/common/http';

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
    RouterModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    VehicleService
  ]
})
export class VehicleModule { }
