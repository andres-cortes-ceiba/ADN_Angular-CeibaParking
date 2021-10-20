import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ParkingLotServiceMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot-service.mock';
import { ParkingLotMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot.mock';
import { ParkingLotService } from '../../shared/services/parking-lot.service';

import { CreateParkingLotComponent } from './create-parking-lot.component';

describe('CreateParkingLotComponent', () => {
  let component: CreateParkingLotComponent;
  let fixture: ComponentFixture<CreateParkingLotComponent>;
  let parkingLotService: ParkingLotService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParkingLotComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ParkingLotService, useClass: ParkingLotServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParkingLotComponent);
    component = fixture.componentInstance;
    parkingLotService = TestBed.inject(ParkingLotService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.createParkingLotForm.value).toEqual({
      code: '',
      parking_type: '',
      available: true
    });
  });

  it('should return false when form is empty', () => {
    expect(component.createParkingLotForm.valid).toBeFalsy();
  });

  it('should return false when form is invalid', () => {
    const invalidData = {
      code: '',
      parking_type: 'car'
    };

    component.createParkingLotForm.patchValue(invalidData);
    expect(component.createParkingLotForm.valid).toBeFalsy();

  });

  it('should return true when form is valid', () => {

    component.createParkingLotForm.patchValue(ParkingLotMock);
    expect(component.createParkingLotForm.valid).toBeTruthy();

  });

  it('should call method createParkingLot and navigate to /parking-lot/list-parking-lot', () => {

    const spyCreate = spyOn(parkingLotService, 'createParkingLot').and.callThrough();
    const spyRedirect = spyOn(component, 'redirectToList').and.callFake(() => {});

    component.createParkingLot();

    expect(spyCreate).toHaveBeenCalled();
    expect(spyRedirect).toHaveBeenCalled();

  });
});
