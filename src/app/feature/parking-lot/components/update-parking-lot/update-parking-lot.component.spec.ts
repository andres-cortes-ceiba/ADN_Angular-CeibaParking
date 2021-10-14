import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ParkingLotServiceMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot-service.mock';
import { ParkingLotMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot.mock';
import { ParkingLotRoutingModule } from '../../parking-lot-routing.module';
import { ParkingLotService } from '../../shared/services/parking-lot.service';

import { UpdateParkingLotComponent } from './update-parking-lot.component';

describe('UpdateParkingLotComponent', () => {
  let component: UpdateParkingLotComponent;
  let fixture: ComponentFixture<UpdateParkingLotComponent>;
  let parkingLotService: ParkingLotService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParkingLotComponent ],
      imports: [
        ParkingLotRoutingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ParkingLotService, useClass: ParkingLotServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkingLotComponent);
    component = fixture.componentInstance;
    parkingLotService = TestBed.inject(ParkingLotService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.updateParkingLotForm.value).toEqual(ParkingLotMock);
  });

  it('should return false when form is invalid', () => {
    const invalidData = {
      id: 1,
      code: '',
      parking_type: 'motorcycle',
      vehicle: null,
      available: true
    };

    component.updateParkingLotForm.patchValue(invalidData);
    expect(component.updateParkingLotForm.valid).toBeFalsy();

  });

  it('should return true when form is valid', () => {

    component.updateParkingLotForm.patchValue(ParkingLotMock);
    expect(component.updateParkingLotForm.valid).toBeTruthy();

  });

  it('should call method updateParkingLot and navigate to /vehicle/list-vehicle', () => {

    const spyCreate = spyOn(parkingLotService, 'updateParkingLot').and.callThrough();
    const spyRedirect = spyOn(component, 'redirectToList').and.callThrough();

    component.updateParkingLot();

    expect(spyCreate).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalled();

  });

  it('should redirect to /parking-lot/list-parking-lot if can not find the parking lot', () => {

    const spyRedirect = spyOn(component, 'redirectToList').and.callThrough();

    let spyGetParkingLot = spyOn(parkingLotService, 'getParkingLot').and.returnValue(of(ParkingLotMock));

    component.ngOnInit();

    expect(spyGetParkingLot).toHaveBeenCalled();
    expect(spyRedirect).not.toHaveBeenCalled();
    expect(component.updateParkingLotForm.value).toEqual(ParkingLotMock);

    spyGetParkingLot = spyGetParkingLot.and.returnValue(of(null));

    component.ngOnInit();

    expect(spyGetParkingLot).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalled();
  });
});
