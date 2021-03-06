import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParkingLot } from '@core/modelo/parking-lot';
import { ParkingLotServiceMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot-service.mock';
import { ParkingLotArrayMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot.mock';
import { ParkingLotService } from '../../shared/services/parking-lot.service';

import { ListParkingLotComponent } from './list-parking-lot.component';

describe('ListParkingLotComponent', () => {
  let component: ListParkingLotComponent;
  let fixture: ComponentFixture<ListParkingLotComponent>;
  let parkingLotService: ParkingLotService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParkingLotComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: ParkingLotService, useClass: ParkingLotServiceMock}
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    parkingLotService = TestBed.inject(ParkingLotService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call service to get all parking lots', () => {
    const getParkingLotsSpy = spyOn(parkingLotService, 'getParkingLots').and.callThrough();

    component.ngOnInit();

    expect(getParkingLotsSpy).toHaveBeenCalled();
    component.parkingLots$.subscribe((parkingLots: ParkingLot[]) => {
      expect(parkingLots).toEqual(ParkingLotArrayMock);
    });

  });

});
