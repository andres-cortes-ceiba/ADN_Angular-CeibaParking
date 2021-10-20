import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VehicleServiceMock } from 'src/test/utils/mocks/vehicle/services/vehicle-service.mock';
import { VehicleMock } from 'src/test/utils/mocks/vehicle/services/vehicle.mock';
import { VehicleService } from '../../shared/services/vehicle.service';
import { VehicleRoutingModule } from '../../vehicle-routing.module';

import { CreateVehicleComponent } from './create-vehicle.component';

describe('CreateVehicleComponent', () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;
  let vehicleService: VehicleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleComponent ],
      imports: [
        VehicleRoutingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: VehicleService, useClass: VehicleServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleComponent);
    vehicleService = TestBed.inject(VehicleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.createVehicleForm.value).toEqual({
      license_plate: '',
      vehicle_name: '',
      vehicle_type: '',
      parked: false,
    });
  });

  it('should return false when form is empty', () => {
    expect(component.createVehicleForm.valid).toBeFalsy();
  });

  it('should return false when form is invalid', () => {
    const invalidData = {
      license_plate: 'AYM432',
      vehicle_name: '',
      vehicle_type: 'motorcycle',
      parked: false
    };
    const invalidByLengthData = {
      license_plate: 'AYM43256',
      vehicle_name: '',
      vehicle_type: 'motorcycle',
      parked: false
    };

    component.createVehicleForm.patchValue(invalidData);
    expect(component.createVehicleForm.valid).toBeFalsy();

    component.createVehicleForm.patchValue(invalidByLengthData);
    expect(component.createVehicleForm.valid).toBeFalsy();
  });

  it('should return true when form is valid', () => {

    component.createVehicleForm.patchValue(VehicleMock);
    expect(component.createVehicleForm.valid).toBeTruthy();

  });

  it('should call method createVehicle and navigate to /vehicle/list-vehicle', () => {

    const spyCreate = spyOn(vehicleService, 'createVehicle').and.callThrough();
    const spyRedirect = spyOn(component, 'redirectToList').and.callThrough();

    component.createVehicle();

    expect(spyCreate).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalled();

  });

});
