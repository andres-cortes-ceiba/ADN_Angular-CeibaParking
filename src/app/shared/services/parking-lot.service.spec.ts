import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ParkingLot } from '@core/modelo/parking-lot';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { ParkingLotArrayMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot.mock';
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

  it('should return an Observable<ParkingLot[]> when get all ParkingLots', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(ParkingLotArrayMock));

    service.getParkingLots().subscribe((res: ParkingLot[]) => {
      expect(res).toEqual(ParkingLotArrayMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });
});
