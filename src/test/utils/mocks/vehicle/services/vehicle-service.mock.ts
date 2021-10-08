import { Vehicle } from '@core/modelo/vehicle';
import { of } from 'rxjs';
import { VehicleMock, VehicleArrayMock } from './vehicle.mock';

export class VehicleServiceMock {

    createVehicle(vehicle: Vehicle) {
        if (vehicle) {
            return of(true);
        }
    }

    getVehicle(vehicleId: number) {
        vehicleId = 1;
        if (vehicleId) {
            return of(VehicleMock);
        }
    }

    getVehicles() {
        return of(VehicleArrayMock);
    }

    updateVehicle(vehicle: Vehicle) {
        if (vehicle) {
            return of(true);
        }
    }

}
