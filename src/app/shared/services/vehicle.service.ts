import { Injectable } from '@angular/core';
import { Vehicle } from '@core/modelo/vehicle';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(
    private http: HttpService
  ) { }

  getVehicles() {
    return this.http.doGet<Vehicle[]>('/vehicle?parked=false');
  }

  editVehicle(vehicle: Vehicle) {
    return this.http.doPut<Vehicle, boolean>('/vehicle/' + vehicle.id, vehicle);
  }

}
