export const ParkingLotMock = {
    id: 1,
    code: 'A22',
    parking_type: 'motorcycle',
    vehicle: {
        id: 1,
        license_plate: 'OQJ17B',
        vehicle_name: 'YBR125',
        vehicle_type: 'motorcycle',
        parked: true
    },
    available: false
};

export const ParkingLotArrayMock = [
    {
        id: 1,
        code: 'A22',
        parking_type: 'motorcycle',
        vehicle: {
            id: 1,
            license_plate: 'OQJ17B',
            vehicle_name: 'YBR125',
            vehicle_type: 'motorcycle',
            parked: true
        },
        available: false
    },
    {
        id: 2,
        code: 'B12',
        parking_type: 'car',
        vehicle: {
            id: 2,
            license_plate: 'MVT745',
            vehicle_name: 'Mazda 3',
            vehicle_type: 'car',
            parked: true
        },
        available: false
    }
];
