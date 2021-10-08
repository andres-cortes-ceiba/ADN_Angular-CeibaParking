import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { VehicleMock } from 'src/test/utils/mocks/vehicle/services/vehicle.mock';

import { VehicleService } from './vehicle.service';

describe('VehicleService', () => {
  let service: VehicleService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        VehicleService,
        HttpService
      ]
    });
    service = TestBed.inject(VehicleService);
    http = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<boolean> when post a vehicle', () => {
    const spyDoPost = spyOn(http,'doPost').and.returnValue(of(true));

    service.createVehicle(VehicleMock).subscribe((res:boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPost).toHaveBeenCalled();

  });
});
