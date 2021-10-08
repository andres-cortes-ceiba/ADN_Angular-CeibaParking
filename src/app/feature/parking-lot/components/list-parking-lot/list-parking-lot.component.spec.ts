import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParkingLotComponent } from './list-parking-lot.component';

describe('ListParkingLotComponent', () => {
  let component: ListParkingLotComponent;
  let fixture: ComponentFixture<ListParkingLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParkingLotComponent ]
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
