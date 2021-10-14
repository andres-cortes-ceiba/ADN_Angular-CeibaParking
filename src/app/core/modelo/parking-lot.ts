import { Vehicle } from './vehicle';

export interface ParkingLot {
    id: number;
    code: string;
    parking_type: string;
    vehicle: Vehicle;
    available: boolean;
}
