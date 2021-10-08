import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { Vehicle } from '@core/modelo/vehicle';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { VehicleArrayMock, VehicleMock } from 'src/test/utils/mocks/vehicle/services/vehicle.mock';

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

  it('should return an Observable<Vehicle> when get specific vehicle', () => {
    const spyDoGet = spyOn(http,'doGet').and.returnValue(of(VehicleMock));

    service.getVehicle(1).subscribe((res:Vehicle) => {
      expect(res).toEqual(VehicleMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

  it('should return an Observable<Vehicle[]> when get all vehicles', () => {
    const spyDoGet = spyOn(http,'doGet').and.returnValue(of(VehicleArrayMock));

    service.getVehicles().subscribe((res:Vehicle[]) => {
      expect(res).toEqual(VehicleArrayMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

  it('should return an Observable<boolean> when update a vehicle', () => {
    const spyDoPut = spyOn(http,'doPut').and.returnValue(of(true));

    service.updateVehicle(VehicleMock).subscribe((res:boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPut).toHaveBeenCalled();

  });

});
