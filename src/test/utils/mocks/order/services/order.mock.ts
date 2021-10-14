export const OrderMock = {
    id: 1,
    parking_lot: {
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
    vehicle: {
        id: 1,
        license_plate: 'OQJ17B',
        vehicle_name: 'YBR125',
        vehicle_type: 'motorcycle',
        parked: true
    },
    start: null,
    end: null,
    price: 8000,
};

export const OrderArrayMock = [
    {
        id: 1,
        parking_lot: {
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
        vehicle: {
            id: 1,
            license_plate: 'OQJ17B',
            vehicle_name: 'YBR125',
            vehicle_type: 'motorcycle',
            parked: true
        },
        start: null,
        end: null,
        price: 8000,
    },
    {
        id: 2,
        parking_lot: {
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
            available: true
        },
        vehicle: {
            id: 2,
            license_plate: 'MVT745',
            vehicle_name: 'Mazda 3',
            vehicle_type: 'car',
            parked: true
        },
        start: null,
        end: null,
        price: 9000,
    }
];
