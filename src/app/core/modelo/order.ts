import { Vehicle } from '@core/modelo/vehicle';
import { ParkingLot } from '@core/modelo/parking-lot';

export interface Order {
    id: number;
    parking_lot: ParkingLot;
    vehicle: Vehicle;
    start: Date;
    end: Date;
    price: number;
}
