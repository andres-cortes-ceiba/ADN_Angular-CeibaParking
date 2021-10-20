import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VehicleService } from './services/vehicle.service';
import { ParkingLotService } from './services/parking-lot.service';
import { FilterVehicleByTypePipe } from './pipe/filter-vehicle-by-type/filter-vehicle-by-type.pipe';
import { FilterParkingLotByTypePipe } from './pipe/filter-parking-lot-by-type/filter-parking-lot-by-type.pipe';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

@NgModule({
  declarations: [
    FilterVehicleByTypePipe,
    FilterParkingLotByTypePipe,
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    VehicleService,
    ParkingLotService
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FilterVehicleByTypePipe,
    FilterParkingLotByTypePipe,
    GenericTableComponent
  ]
})
export class SharedModule { }
