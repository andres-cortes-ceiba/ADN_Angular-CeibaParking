import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Order } from '@core/modelo/order';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  carOrderDayOnWeekMock,
  carOrderOnWeekendMock,
  carOrderOnWeekMock,
  motorcycleDayOrderOnWeekMock,
  motorcycleOrderOnWeekendMock,
  motorcycleOrderOnWeekMock,
  OrderArrayMock,
  OrderMock
} from 'src/test/utils/mocks/order/services/order.mock';
import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;
  let http: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        OrderService,
        HttpService
      ]
    });
    service = TestBed.inject(OrderService);
    http = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<boolean> when post a Order', () => {
    const spyDoPost = spyOn(http, 'doPost').and.returnValue(of(true));

    service.createOrder(OrderMock).subscribe((res: boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPost).toHaveBeenCalled();

  });

  it('should return an Observable<Order> when get specific Order', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(OrderMock));

    service.getOrder(1).subscribe((res: Order) => {
      expect(res).toEqual(OrderMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

  it('should return an Observable<Order[]> when get all Orders', () => {
    const spyDoGet = spyOn(http, 'doGet').and.returnValue(of(OrderArrayMock));

    service.getOrders().subscribe((res: Order[]) => {
      expect(res).toEqual(OrderArrayMock);
    });

    expect(spyDoGet).toHaveBeenCalled();

  });

  it('should return result of multiplying the cost of car hour on weekend service with the number of hours using he service', () => {
    const hours = 3;
    const expected = environment.weekendCarHourPrice * hours;
    const price = service.calcPrice(carOrderOnWeekendMock);

    expect(price).toEqual(expected);
  });

  it('should return result of multiplying the cost of motorcycle hour on weekend service with the number of hours using he service', () => {
    const hours = 3;
    const expected = environment.weekendMotorcycleHourPrice * hours;
    const price = service.calcPrice(motorcycleOrderOnWeekendMock);

    expect(price).toEqual(expected);
  });

  it('should return result of ultiplying the cost of car hour on week service with the number of hours using he service', () => {
    const hours = 3;
    const expected = environment.carHourPrice * hours;
    const price = service.calcPrice(carOrderOnWeekMock);

    expect(price).toEqual(expected);
  });

  it('should return result of multiplying the cost of motorcycle hour on week service with the number of hours using he service', () => {
    const hours = 3;
    const expected = environment.motorcycleHourPrice * hours;
    const price = service.calcPrice(motorcycleOrderOnWeekMock);

    expect(price).toEqual(expected);
  });

  it('should return result of a day car service', () => {
    const expected = environment.dayCarPrice;
    const price = service.calcPrice(carOrderDayOnWeekMock);

    expect(price).toEqual(expected);
  });

  it('should return result of a day motorcycle service', () => {
    const expected = environment.dayMotorcyclePrice;
    const price = service.calcPrice(motorcycleDayOrderOnWeekMock);

    expect(price).toEqual(expected);
  });

  it('should return an Observable<boolean> when posts an order', () => {
    const spyDoPost = spyOn(http, 'doPost').and.returnValue(of(true));

    service.createOrder(OrderMock).subscribe((res: boolean) => {
      expect(res).toBeTruthy();
    });

    expect(spyDoPost).toHaveBeenCalled();

  });

});
