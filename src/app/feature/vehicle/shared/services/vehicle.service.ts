import { Injectable } from '@angular/core';
import { Vehicle } from '@core/modelo/vehicle';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class VehicleService {

  constructor(
    private http: HttpService,
  ) { }

  createVehicle(vehicle: any) {
    return this.http.doPost<Vehicle, boolean>(environment.endpoint + '/vehicle', vehicle);
  }

  getVehicle(vehicleId: number) {
    return this.http.doGet<Vehicle>(environment.endpoint +'/vehicle/' + vehicleId);
  }

  getVehicles() {
    return this.http.doGet<Vehicle[]>(environment.endpoint + '/vehicle');
  }

  updateVehicle(vehicle: Vehicle) {
    return this.http.doPut<Vehicle, boolean>('/vehicle' + vehicle.id, vehicle);
  }

}
