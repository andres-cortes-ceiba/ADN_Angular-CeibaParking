import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ParkingLot } from '@core/modelo/parking-lot';
import { Vehicle } from '@core/modelo/vehicle';
import { FilterParkingLotByTypePipe } from '@shared/pipe/filter-parking-lot-by-type/filter-parking-lot-by-type.pipe';
import { FilterVehicleByTypePipe } from '@shared/pipe/filter-vehicle-by-type/filter-vehicle-by-type.pipe';
import { ParkingLotService } from '@shared/services/parking-lot.service';
import { VehicleService } from '@shared/services/vehicle.service';
import { OrderServiceMock } from 'src/test/utils/mocks/order/services/order-service.mock';
import { OrderMock } from 'src/test/utils/mocks/order/services/order.mock';
import { ParkingLotServiceMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot-service.mock';
import { ParkingLotArrayMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot.mock';
import { VehicleServiceMock } from 'src/test/utils/mocks/vehicle/services/vehicle-service.mock';
import { VehicleArrayMock } from 'src/test/utils/mocks/vehicle/services/vehicle.mock';
import { OrderRoutingModule } from '../../order-routing.module';
import { OrderService } from '../../shared/services/order.service';

import { CreateOrderComponent } from './create-order.component';

describe('CreateOrderComponent', () => {
  let component: CreateOrderComponent;
  let fixture: ComponentFixture<CreateOrderComponent>;
  let orderService: OrderService;
  let vehicleService: VehicleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreateOrderComponent,
        FilterParkingLotByTypePipe,
        FilterVehicleByTypePipe
       ],
      imports: [
        OrderRoutingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers : [
        { provide: OrderService, useClass: OrderServiceMock },
        { provide: ParkingLotService, useClass: ParkingLotServiceMock },
        { provide: VehicleService, useClass: VehicleServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrderComponent);
    component = fixture.componentInstance;
    orderService = TestBed.inject(OrderService);
    vehicleService = TestBed.inject(VehicleService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.createOrderForm.value).toEqual({
      parking_lot: '',
      vehicle: '',
      start: null,
      end: null,
      price: '',
    });
  });

  it('should call service to get available parkingLots', () => {
    const getParkingLotsSpy = spyOn(component, 'getParkingLots').and.callThrough();

    component.ngOnInit();

    expect(getParkingLotsSpy).toHaveBeenCalled();
    component.parkingLotsData$.subscribe(( parkingLots: ParkingLot[]) => {
      expect(parkingLots).toEqual(ParkingLotArrayMock);
    });

  });

  it('should call service to get not parked vehicles', () => {
    const getvehiclesSpy = spyOn(vehicleService, 'getVehicles').and.callThrough();

    component.ngOnInit();

    expect(getvehiclesSpy).toHaveBeenCalled();
    component.vehiclesData$.subscribe(( vehicles: Vehicle[]) => {
      expect(vehicles).toEqual(VehicleArrayMock);
    });

  });

  it('should return false when form is empty', () => {
    expect(component.createOrderForm.valid).toBeFalsy();
  });

  it('should return false when form is invalid', () => {
    const invalidData = {
      parking_lot: 1,
      vehicle: '',
      start: null,
      end: null,
      price: '',
    };

    component.createOrderForm.patchValue(invalidData);
    expect(component.createOrderForm.valid).toBeFalsy();

  });

  it('should return true when form is valid', () => {

    component.createOrderForm.patchValue(OrderMock);
    expect(component.createOrderForm.valid).toBeTruthy();

  });

  it('should call method createOrder and navigate to /order/list-order', () => {

    const spyCreate = spyOn(orderService, 'createOrder').and.callThrough();
    const spyRedirect = spyOn(component, 'redirectToList').and.callThrough();

    component.createOrderForm.patchValue(OrderMock);
    component.createOrder();

    expect(spyCreate).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalled();

  });

});
