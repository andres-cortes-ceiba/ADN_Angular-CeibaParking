import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '@core/modelo/vehicle';
import { VehicleService } from '../../shared/services/vehicle.service';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.sass']
})
export class UpdateVehicleComponent implements OnInit {

  vehicleTypeOptions = [
    'car',
    'motorcycle'
  ];

  updateVehicleForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const vehicleId = this.activatedRoute.snapshot.params.id;
    this.buildForm();
    this.fillForm(vehicleId);
  }

  buildForm(): void {
    this.updateVehicleForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      license_plate: ['', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(5)])],
      vehicle_name: ['', Validators.required],
      vehicle_type: ['car', Validators.required],
      parked: false
    });
  }

  fillForm(id: number) {
    this.vehicleService.getVehicle(id).subscribe((vehicle: Vehicle) => {
      if (vehicle && !vehicle.parked){
        this.updateVehicleForm.patchValue(vehicle);
      } else {
        this.redirectToList();
      }
    });
  }

  updateVehicle(): void {
    this.vehicleService.updateVehicle(this.updateVehicleForm.value).subscribe(() => {
      this.redirectToList();
    });
  }

  redirectToList(): void {
    this.router.navigate(['list-vehicle'], { relativeTo: this.activatedRoute.parent});
  }

}
