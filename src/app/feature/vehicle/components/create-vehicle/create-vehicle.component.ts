import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehicleService } from './../../shared/services/vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.sass']
})
export class CreateVehicleComponent implements OnInit {

  createVehicleForm: FormGroup;

  constructor(
    private readonly router: Router,
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.createVehicleForm = this.formBuilder.group({
      license_plate: ['', [Validators.required, Validators.maxLength(6)]],
      vehicle_name: ['', Validators.required],
      vehicle_type: ['car', Validators.required],
      parked: false
    });
  }

  createVehicle(): void {
    this.vehicleService.createVehicle(this.createVehicleForm.value).subscribe(() => {
      this.redirectToList();
    });
  }

  redirectToList(): void {
    this.router.navigateByUrl('/vehicle/list-vehicle');
  }

}
