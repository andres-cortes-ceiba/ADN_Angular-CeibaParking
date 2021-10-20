import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Vehicle } from '@core/modelo/vehicle';
import { VehicleServiceMock } from 'src/test/utils/mocks/vehicle/services/vehicle-service.mock';
import { VehicleArrayMock } from 'src/test/utils/mocks/vehicle/services/vehicle.mock';
import { VehicleService } from '../../shared/services/vehicle.service';

import { ListVehicleComponent } from './list-vehicle.component';

describe('ListVehicleComponent', () => {
  let component: ListVehicleComponent;
  let fixture: ComponentFixture<ListVehicleComponent>;
  let vehicleService: VehicleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehicleComponent ],
      imports: [ RouterTestingModule ],
      providers: [ {provide: VehicleService, useClass: VehicleServiceMock}],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehicleComponent);
    component = fixture.componentInstance;
    vehicleService = TestBed.inject(VehicleService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call service to get all vehicles', () => {
    const getVehiclesSpy = spyOn(vehicleService, 'getVehicles').and.callThrough();

    component.ngOnInit();

    expect(getVehiclesSpy).toHaveBeenCalled();
    component.vehicles$.subscribe((vehicles: Vehicle[]) => {
      expect(vehicles).toEqual(VehicleArrayMock);
    });

  });

});
