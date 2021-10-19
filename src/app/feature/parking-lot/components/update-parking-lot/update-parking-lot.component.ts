import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingLot } from '@core/modelo/parking-lot';
import { ParkingLotService } from '../../shared/services/parking-lot.service';

@Component({
  selector: 'app-update-parking-lot',
  templateUrl: './update-parking-lot.component.html',
  styleUrls: ['./update-parking-lot.component.sass']
})
export class UpdateParkingLotComponent implements OnInit {

  updateParkingLotForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private parkingLotService: ParkingLotService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    const ParkingLotId = this.activatedRoute.snapshot.params.id;
    this.buildForm();
    this.fillForm(ParkingLotId);
  }

  buildForm(): void {
    this.updateParkingLotForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      code: ['', Validators.required],
      parking_type: ['car', Validators.required],
      available: [false, [Validators.required]]
    });
  }

  fillForm(id: number) {
    this.parkingLotService.getParkingLot(id).subscribe((parkingLot: ParkingLot) => {
      if (parkingLot){
        this.updateParkingLotForm.patchValue(parkingLot);
      } else {
        this.redirectToList();
      }
    });
  }

  updateParkingLot(): void {
    this.parkingLotService.updateParkingLot(this.updateParkingLotForm.value).subscribe(() => {
      this.redirectToList();
    });
  }

  redirectToList(): void {
    this.router.navigateByUrl('/parking-lot/list-parking-lot');
  }

}
