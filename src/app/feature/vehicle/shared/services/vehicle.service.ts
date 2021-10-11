import { Injectable } from '@angular/core';
import { Vehicle } from '@core/modelo/vehicle';
import { HttpService } from '@core/services/http.service';

@Injectable()
export class VehicleService {


  constructor(
    private http: HttpService
  ) { }

  createVehicle(vehicle: any) {
    return this.http.doPost<Vehicle, boolean>('/vehicle', vehicle);
  }

  getVehicle(vehicleId: number) {
    return this.http.doGet<Vehicle>('/vehicle/' + vehicleId);
  }

  getVehicles() {
    return this.http.doGet<Vehicle[]>('/vehicle');
  }

  updateVehicle(vehicle: any) {
    return this.http.doPut<Vehicle, boolean>('/vehicle' + vehicle.id, vehicle);
  }

}
