import { Component, OnInit } from '@angular/core';
import { ParkingLot } from '@core/modelo/parking-lot';
import { ParkingLotService } from './../../shared/services/parking-lot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-parking-lot',
  templateUrl: './list-parking-lot.component.html',
  styleUrls: ['./list-parking-lot.component.sass']
})
export class ListParkingLotComponent implements OnInit {

  parkingLots$: Observable<ParkingLot[]>;

  constructor(
    private parkingLotService: ParkingLotService
  ) { }

  ngOnInit(): void {
    this.getParkingLots();
  }

  getParkingLots(): void {
    this.parkingLots$ = this.parkingLotService.getParkingLots();
  }

}
