import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by/track-by.pipe';
import { VehicleService } from './services/vehicle.service';
import { ParkingLotService } from './services/parking-lot.service';
import { FilterVehicleByTypePipe } from './pipe/filter-vehicle-by-type/filter-vehicle-by-type.pipe';
import { FilterParkingLotByTypePipe } from './pipe/filter-parking-lot-by-type/filter-parking-lot-by-type.pipe';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

@NgModule({
  declarations: [
    TrackByPipe,
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
    TrackByPipe,
    FilterVehicleByTypePipe,
    FilterParkingLotByTypePipe,
    GenericTableComponent
  ]
})
export class SharedModule { }
