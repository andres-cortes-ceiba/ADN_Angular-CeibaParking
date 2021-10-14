import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Vehicle } from '@core/modelo/vehicle';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { VehicleArrayMock } from 'src/test/utils/mocks/vehicle/services/vehicle.mock';

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

  it('should return an Observable<Vehicle[]> when get all vehicles', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(VehicleArrayMock));

    service.getVehicles().subscribe((res: Vehicle[]) => {
      expect(res).toEqual(VehicleArrayMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

});
