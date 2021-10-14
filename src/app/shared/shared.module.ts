import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TrackByPipe } from './pipe/track-by.pipe';
import { VehicleService } from './services/vehicle.service';
import { ParkingLotService } from './services/parking-lot.service';

@NgModule({
  declarations: [
    TrackByPipe
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
    TrackByPipe
  ]
})
export class SharedModule { }
