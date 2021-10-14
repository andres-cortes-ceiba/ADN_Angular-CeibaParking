import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { VehicleServiceMock } from 'src/test/utils/mocks/vehicle/services/vehicle-service.mock';
import { VehicleMock } from 'src/test/utils/mocks/vehicle/services/vehicle.mock';
import { VehicleService } from '../../shared/services/vehicle.service';

import { UpdateVehicleComponent } from './update-vehicle.component';

describe('UpdateVehicleComponent', () => {
  let component: UpdateVehicleComponent;
  let fixture: ComponentFixture<UpdateVehicleComponent>;
  let vehicleService: VehicleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVehicleComponent ],
      imports: [
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
    fixture = TestBed.createComponent(UpdateVehicleComponent);
    component = fixture.componentInstance;
    vehicleService = TestBed.inject(VehicleService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.updateVehicleForm.value).toEqual(VehicleMock);
  });

  it('should return false when form is invalid', () => {
    const invalidData = {
      id: 1,
      license_plate: 'AYM432',
      vehicle_name: '',
      vehicle_type: 'motorcycle',
      parked: false
    };
    const invalidByLengthData = {
      id: 1,
      license_plate: 'AYM43256',
      vehicle_name: '',
      vehicle_type: 'motorcycle',
      parked: false
    };

    component.updateVehicleForm.patchValue(invalidData);
    expect(component.updateVehicleForm.valid).toBeFalsy();

    component.updateVehicleForm.patchValue(invalidByLengthData);
    expect(component.updateVehicleForm.valid).toBeFalsy();
  });

  it('should return true when form is valid', () => {

    component.updateVehicleForm.patchValue(VehicleMock);
    expect(component.updateVehicleForm.valid).toBeTruthy();

  });

  it('should call method updateVehicle and navigate to /vehicle/list-vehicle', () => {

    const spyCreate = spyOn(vehicleService, 'updateVehicle').and.callThrough();
    const spyRedirect = spyOn(component, 'redirectToList').and.callThrough();

    component.updateVehicle();

    expect(spyCreate).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalled();

  });

  it('should redirect to /vehicle/list-vehicle if can not find the vehicle or if vehicle is parked', () => {

    const spyRedirect = spyOn(component, 'redirectToList').and.callThrough();

    let spyGetVehicle = spyOn(vehicleService, 'getVehicle').and.returnValue(of(VehicleMock));

    component.ngOnInit();

    expect(spyGetVehicle).toHaveBeenCalled();
    expect(spyRedirect).not.toHaveBeenCalled();
    expect(component.updateVehicleForm.value).toEqual(VehicleMock);

    spyGetVehicle = spyGetVehicle.and.returnValue(of(null));

    component.ngOnInit();

    expect(spyGetVehicle).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalled();
  });

});
