import { Injectable } from '@angular/core';
import { ParkingLot } from '@core/modelo/parking-lot';
import { HttpService } from '@core/services/http.service';

@Injectable()
export class ParkingLotService {

  constructor(
    private http: HttpService
  ) { }

  createParkingLot(parkingLot: ParkingLot) {
    return this.http.doPost<ParkingLot, boolean>('/parking_lot', parkingLot);
  }

  getParkingLot(parkingLotId: number) {
    return this.http.doGet<ParkingLot>('/parking_lot/' + parkingLotId);
  }

  getParkingLots() {
    return this.http.doGet<ParkingLot[]>('/parking_lot/');
  }

  updateParkingLot(parkingLot: ParkingLot) {
    return this.http.doPut<ParkingLot, boolean>('/parking_lot' + parkingLot.id, parkingLot);
  }

}
