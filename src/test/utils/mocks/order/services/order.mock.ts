export const OrderMock = {
    id: 1,
    parking_lot: {
        id: 1,
        code: 'A22',
        parking_type: 'motorcycle',
    },
    vehicle: {
        id: 1,
        license_plate: 'OQJ17B',
        vehicle_name: 'YBR125',
        vehicle_type: 'motorcycle',
    },
    start: new Date(2021, 10, 5, 8, 15, 0),
    end: new Date(2021, 10, 5, 16, 50, 0),
    price: 8000,
};

export const OrderArrayMock = [
    {
        id: 1,
        parking_lot: {
            id: 1,
            code: 'A22',
            parking_type: 'motorcycle',
        },
        vehicle: {
            id: 1,
            license_plate: 'OQJ17B',
            vehicle_name: 'YBR125',
            vehicle_type: 'motorcycle',
        },
        start: new Date(2021, 10, 5, 8, 15, 0),
        end: new Date(2021, 10, 5, 16, 50, 0),
        price: 8000,
    },
    {
        id: 2,
        parking_lot: {
            id: 2,
            code: 'B12',
            parking_type: 'car',
        },
        vehicle: {
            id: 2,
            license_plate: 'MVT745',
            vehicle_name: 'Mazda 3',
            vehicle_type: 'car',
        },
        start: new Date(2021, 10, 2, 10, 32, 0),
        end: new Date(2021, 10, 2, 13, 25, 0),
        price: 9000,
    }
];
