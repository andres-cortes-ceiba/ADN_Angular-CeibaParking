import { ParkingLot } from '@core/modelo/parking-lot';
import { of } from 'rxjs';
import { ParkingLotMock, ParkingLotArrayMock } from './parking-lot.mock';

export class ParkingLotServiceMock {

    createParkingLot(parkingLot: ParkingLot) {
        if (parkingLot) {
            return of(true);
        }
    }

    getParkingLot(parkingLotId: number) {
        parkingLotId = 1;
        if (parkingLotId) {
            return of(ParkingLotMock);
        }
    }

    getParkingLots() {
        return of(ParkingLotArrayMock);
    }

    updateParkingLot(parkingLot: ParkingLot) {
        if (parkingLot) {
            return of(true);
        }
    }

}
