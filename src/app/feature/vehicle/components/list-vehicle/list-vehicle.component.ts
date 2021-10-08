import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@core/modelo/vehicle';
import { VehicleService } from './../../shared/services/vehicle.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.sass']
})
export class ListVehicleComponent implements OnInit {

  vehicles$: Observable<Vehicle[]>;

  constructor(
    private vehicleService: VehicleService
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicles$ = this.vehicleService.getVehicles();
  }

}
