import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Order } from '@core/modelo/order';
import { SharedModule } from '@shared/shared.module';
import { OrderServiceMock } from 'src/test/utils/mocks/order/services/order-service.mock';
import { OrderArrayMock } from 'src/test/utils/mocks/order/services/order.mock';
import { OrderService } from '../../shared/services/order.service';

import { ListOrderComponent } from './list-order.component';

describe('ListOrderComponent', () => {
  let component: ListOrderComponent;
  let fixture: ComponentFixture<ListOrderComponent>;
  let orderService: OrderService;

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
    orderService = TestBed.inject(OrderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call service to get all orders', () => {
    const getOrdersSpy = spyOn(orderService, 'getOrders').and.callThrough();

    component.ngOnInit();

    expect(getOrdersSpy).toHaveBeenCalled();
    component.orders$.subscribe((orders: Order[]) => {
      expect(orders).toEqual(OrderArrayMock);
    })

  });

});
