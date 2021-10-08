import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkingLotServiceMock } from 'src/test/utils/mocks/parking-lot/services/parking-lot-service.mock';
import { ParkingLotService } from '../../shared/services/parking-lot.service';

import { ListParkingLotComponent } from './list-parking-lot.component';

describe('ListParkingLotComponent', () => {
  let component: ListParkingLotComponent;
  let fixture: ComponentFixture<ListParkingLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParkingLotComponent ],
      providers: [
        { provide: ParkingLotService, useClass: ParkingLotServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
