import { Component, OnInit } from '@angular/core';
import { Vehicle } from '@core/modelo/vehicle';
import { VehicleService } from './../../shared/services/vehicle.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.sass']
})
export class ListVehicleComponent implements OnInit {

  labels: string[] = [
    'ID',
    'License plate',
    'Vehicle name',
    'Vehicle type',
    'Parked'
  ];

  fields: string[] = [
    'id',
    'license_plate',
    'vehicle_name',
    'vehicle_type',
    'parked'
  ];

  action = 'Edit';

  vehicles$: Observable<Vehicle[]>;

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicles$ = this.vehicleService.getVehicles();
  }

  goToEditVehicle(vehicleId: number) {
    this.router.navigate(['update-vehicle/' + vehicleId], {relativeTo: this.activatedRoute.parent});
  }

}
