import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { OrderServiceMock } from 'src/test/utils/mocks/order/services/order-service.mock';
import { OrderService } from '../../shared/services/order.service';

import { ListOrderComponent } from './list-order.component';

describe('ListOrderComponent', () => {
  let component: ListOrderComponent;
  let fixture: ComponentFixture<ListOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderComponent ],
      imports: [
        SharedModule
      ],
      providers: [ {provide: OrderService, useClass: OrderServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
