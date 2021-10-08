import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ParkingLot } from '@core/modelo/parking-lot';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { ParkingLotArrayMock, ParkingLotMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot.mock';

import { ParkingLotService } from './parking-lot.service';

describe('ParkingLotService', () => {
  let service: ParkingLotService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ParkingLotService,
        HttpService
      ]
    });
    service = TestBed.inject(ParkingLotService);
    http = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<boolean> when post a parkingLot', () => {
    const spyDoPost = spyOn(http,'doPost').and.returnValue(of(true));

    service.createParkingLot(ParkingLotMock).subscribe((res:boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPost).toHaveBeenCalled();

  });

  it('should return an Observable<ParkinLot> when get specific parkingLot', () => {
    const spyDoGet = spyOn(http,'doGet').and.returnValue(of(ParkingLotMock));

    service.getParkingLot(1).subscribe((res:ParkingLot) => {
      expect(res).toEqual(ParkingLotMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

  it('should return an Observable<ParkingLot[]> when get all ParkingLots', () => {
    const spyDoGet = spyOn(http,'doGet').and.returnValue(of(ParkingLotArrayMock));

    service.getParkingLots().subscribe((res:ParkingLot[]) => {
      expect(res).toEqual(ParkingLotArrayMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

  it('should return an Observable<boolean> when update a ParkingLot', () => {
    const spyDoPut = spyOn(http,'doPut').and.returnValue(of(true));

    service.updateParkingLot(ParkingLotMock).subscribe((res:boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPut).toHaveBeenCalled();

  });

});
