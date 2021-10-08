import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingLotRoutingModule } from './parking-lot-routing.module';
import { CreateParkingLotComponent } from './components/create-parking-lot/create-parking-lot.component';
import { UpdateParkingLotComponent } from './components/update-parking-lot/update-parking-lot.component';
import { ListParkingLotComponent } from './components/list-parking-lot/list-parking-lot.component';
import { ParkingLotService } from './shared/services/parking-lot.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateParkingLotComponent,
    UpdateParkingLotComponent,
    ListParkingLotComponent
  ],
  imports: [
    CommonModule,
    ParkingLotRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ParkingLotService
  ]
})
export class ParkingLotModule { }
