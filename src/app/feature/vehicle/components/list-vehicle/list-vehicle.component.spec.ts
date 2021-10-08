import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehicleServiceMock } from 'src/test/utils/mocks/vehicle/services/vehicle-service.mock';
import { VehicleService } from '../../shared/services/vehicle.service';

import { ListVehicleComponent } from './list-vehicle.component';

describe('ListVehicleComponent', () => {
  let component: ListVehicleComponent;
  let fixture: ComponentFixture<ListVehicleComponent>;
  //let vehicleService: VehicleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehicleComponent ],
      providers: [ {provide: VehicleService, useClass: VehicleServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehicleComponent);
    component = fixture.componentInstance;
    //vehicleService = TestBed.inject(VehicleService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
