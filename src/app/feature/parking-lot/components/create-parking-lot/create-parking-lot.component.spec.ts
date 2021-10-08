import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from "@angular/router/testing";
import { ParkingLotServiceMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot-service.mock';
import { ParkingLotService } from '../../shared/services/parking-lot.service';

import { CreateParkingLotComponent } from './create-parking-lot.component';

describe('CreateParkingLotComponent', () => {
  let component: CreateParkingLotComponent;
  let fixture: ComponentFixture<CreateParkingLotComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
