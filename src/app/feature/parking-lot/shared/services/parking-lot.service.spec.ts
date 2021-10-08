import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { ParkingLotService } from './parking-lot.service';

describe('ParkingLotService', () => {
  let service: ParkingLotService;

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
