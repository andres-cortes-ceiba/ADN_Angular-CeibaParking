import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingLotService } from './../../shared/services/parking-lot.service';

@Component({
  selector: 'app-create-parking-lot',
  templateUrl: './create-parking-lot.component.html',
  styleUrls: ['./create-parking-lot.component.sass']
})
export class CreateParkingLotComponent implements OnInit {

  createParkingLotForm: FormGroup;

  constructor(
    private readonly router: Router,
    private parkingLotService: ParkingLotService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.createParkingLotForm = this.formBuilder.group({
      code: ['', Validators.required],
      parking_type: ['car', Validators.required],
      available: true
    });
  }

  createParkingLot(): void {
    this.parkingLotService.createParkingLot(this.createParkingLotForm.value).subscribe(() => {
      this.redirectToList();
    });
  }

  redirectToList(): void {
    this.router.navigateByUrl('/parking-lot/list-parking-lot');
  }

}
