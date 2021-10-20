import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '@core/modelo/order';
import { ParkingLot } from '@core/modelo/parking-lot';
import { Vehicle } from '@core/modelo/vehicle';
import { ParkingLotService } from '@shared/services/parking-lot.service';
import { VehicleService } from '@shared/services/vehicle.service';
import { Observable } from 'rxjs';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.sass']
})
export class CreateOrderComponent implements OnInit {

  createOrderForm: FormGroup;
  vehiclesData$: Observable<Vehicle[]>;
  parkingLotsData$: Observable<ParkingLot[]>;
  vehicleType = '';

  constructor(
    private readonly router: Router,
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private vehiclesService: VehicleService,
    private parkingLotService: ParkingLotService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getVehicles();
    this.getParkingLots();
  }

  buildForm(): void {
    this.createOrderForm = this.formBuilder.group({
      parking_lot: ['', Validators.required],
      vehicle: ['', Validators.required],
      start: [null],
      end: [null],
      price: [''],
    });
  }

  get vehicle(): Vehicle {
    return this.createOrderForm.get('vehicle').value;
  }

  get parkingLot(): ParkingLot {
    return this.createOrderForm.get('parking_lot').value;
  }

  get order(): Order {
    return this.createOrderForm.value;
  }

  async createOrder() {
    this.vehicle.parked = true;
    this.parkingLot.available = false;
    this.order.start = new Date();
    this.orderService.createOrder(this.order).subscribe( () => {
      this.redirectToList();
    });
    // concat(
    //   this.vehiclesService.editVehicle(this.vehicle),
    //   this.parkingLotService.editParkingLot(this.parkingLot),
    //   this.orderService.createOrder(this.order)
    // ).subscribe( () => {
    //   this.redirectToList();
    // });
  }

  getVehicles() {
    this.vehiclesData$ = this.vehiclesService.getVehicles();
  }

  getParkingLots() {
    this.parkingLotsData$ = this.parkingLotService.getParkingLots();
  }

  redirectToList(): void {
    this.router.navigateByUrl('/order/list-order');
  }

}
