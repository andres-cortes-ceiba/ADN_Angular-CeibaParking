import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkingLotRoutingModule } from './parking-lot-routing.module';
import { CreateParkingLotComponent } from './components/create-parking-lot/create-parking-lot.component';
import { UpdateParkingLotComponent } from './components/update-parking-lot/update-parking-lot.component';
import { ListParkingLotComponent } from './components/list-parking-lot/list-parking-lot.component';
import { ParkingLotService } from './shared/services/parking-lot.service';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CreateParkingLotComponent,
    UpdateParkingLotComponent,
    ListParkingLotComponent
  ],
  imports: [
    CommonModule,
    ParkingLotRoutingModule,
    RouterModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    ParkingLotService
  ]
})
export class ParkingLotModule { }
