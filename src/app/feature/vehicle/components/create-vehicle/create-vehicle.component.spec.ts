import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { VehicleServiceMock } from 'src/test/utils/mocks/vehicle/services/vehicle-service.mock';
import { VehicleService } from '../../shared/services/vehicle.service';
import { VehicleRoutingModule } from '../../vehicle-routing.module';

import { CreateVehicleComponent } from './create-vehicle.component';

describe('CreateVehicleComponent', () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleComponent ],
      imports: [
        VehicleRoutingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: VehicleService, useClass: VehicleServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
