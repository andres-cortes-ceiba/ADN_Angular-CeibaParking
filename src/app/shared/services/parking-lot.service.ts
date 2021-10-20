import { Injectable } from '@angular/core';
import { ParkingLot } from '@core/modelo/parking-lot';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotService {

  constructor(
    private http: HttpService
  ) { }

  getParkingLots() {
    return this.http.doGet<ParkingLot[]>('/parking_lot?available=true');
  }

  editParkingLot(parkingLot: ParkingLot) {
    return this.http.doPut<ParkingLot, boolean>('/parking_lot/' + parkingLot.id, parkingLot);
  }

}
