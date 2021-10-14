import { Vehicle } from '@core/modelo/vehicle';
import { of } from 'rxjs';
import { VehicleMock, VehicleArrayMock } from './vehicle.mock';

export class VehicleServiceMock {

    createVehicle(vehicle: Vehicle) {
        if (vehicle) {
            return of(true);
        }
    }

    getVehicle(_: number) {
        return of(VehicleMock);
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
