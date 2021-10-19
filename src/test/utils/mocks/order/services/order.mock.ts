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

export const carOrderOnWeekendMock = {
    id: 3,
    parking_lot: {
      code: 'A34',
      parking_type: 'car',
      vehicle: {
        license_plate: 'AGF345',
        vehicle_name: 'name',
        vehicle_type: 'car',
        parked: true,
        id: 7
      },
      available: false,
      id: 7
    },
    vehicle: {
      license_plate: 'AGF345',
      vehicle_name: 'name',
      vehicle_type: 'car',
      parked: true,
      id: 7
    },
    start: new Date('2021-10-17T11:47:12.420Z'),
    end: new Date('2021-10-17T14:23:12.420Z'),
    price: null,
};

export const motorcycleOrderOnWeekendMock = {
    id: 3,
    parking_lot: {
      code: 'A34',
      parking_type: 'motorcycle',
      vehicle: {
        license_plate: 'AGF345',
        vehicle_name: 'name',
        vehicle_type: 'motorcycle',
        parked: true,
        id: 7
      },
      available: false,
      id: 7
    },
    vehicle: {
      license_plate: 'AGF345',
      vehicle_name: 'name',
      vehicle_type: 'motorcycle',
      parked: true,
      id: 7
    },
    start: new Date('2021-10-17T11:47:12.420Z'),
    end: new Date('2021-10-17T14:23:12.420Z'),
    price: null,
};

export const carOrderOnWeekMock = {
    id: 3,
    parking_lot: {
      code: 'A34',
      parking_type: 'car',
      vehicle: {
        license_plate: 'AGF345',
        vehicle_name: 'name',
        vehicle_type: 'car',
        parked: true,
        id: 7
      },
      available: false,
      id: 7
    },
    vehicle: {
      license_plate: 'AGF345',
      vehicle_name: 'name',
      vehicle_type: 'car',
      parked: true,
      id: 7
    },
    start: new Date('2021-10-15T11:47:12.420Z'),
    end: new Date('2021-10-15T14:23:12.420Z'),
    price: null,
};

export const motorcycleOrderOnWeekMock = {
    id: 3,
    parking_lot: {
      code: 'A34',
      parking_type: 'motorcycle',
      vehicle: {
        license_plate: 'AGF345',
        vehicle_name: 'name',
        vehicle_type: 'motorcycle',
        parked: true,
        id: 7
      },
      available: false,
      id: 7
    },
    vehicle: {
      license_plate: 'AGF345',
      vehicle_name: 'name',
      vehicle_type: 'motorcycle',
      parked: true,
      id: 7
    },
    start: new Date('2021-10-15T11:47:12.420Z'),
    end: new Date('2021-10-15T14:23:12.420Z'),
    price: null,
};

export const carOrderDayOnWeekMock = {
    id: 3,
    parking_lot: {
      code: 'A34',
      parking_type: 'car',
      vehicle: {
        license_plate: 'AGF345',
        vehicle_name: 'name',
        vehicle_type: 'car',
        parked: true,
        id: 7
      },
      available: false,
      id: 7
    },
    vehicle: {
      license_plate: 'AGF345',
      vehicle_name: 'name',
      vehicle_type: 'car',
      parked: true,
      id: 7
    },
    start: new Date('2021-10-15T11:47:12.420Z'),
    end: new Date('2021-10-15T20:23:12.420Z'),
    price: null,
};

export const motorcycleDayOrderOnWeekMock = {
    id: 3,
    parking_lot: {
      code: 'A34',
      parking_type: 'motorcycle',
      vehicle: {
        license_plate: 'AGF345',
        vehicle_name: 'name',
        vehicle_type: 'motorcycle',
        parked: true,
        id: 7
      },
      available: false,
      id: 7
    },
    vehicle: {
      license_plate: 'AGF345',
      vehicle_name: 'name',
      vehicle_type: 'motorcycle',
      parked: true,
      id: 7
    },
    start: new Date('2021-10-15T11:47:12.420Z'),
    end: new Date('2021-10-15T20:23:12.420Z'),
    price: null,
};
