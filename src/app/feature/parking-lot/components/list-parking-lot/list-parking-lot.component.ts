import { Component, OnInit } from '@angular/core';
import { ParkingLot } from '@core/modelo/parking-lot';
import { ParkingLotService } from './../../shared/services/parking-lot.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-parking-lot',
  templateUrl: './list-parking-lot.component.html',
  styleUrls: ['./list-parking-lot.component.sass']
})
export class ListParkingLotComponent implements OnInit {

  parkingLots$: Observable<ParkingLot[]>;

  labels: string[] = [
    'ID',
    'Code',
    'Parking type',
    'Available'
  ];

  fields: string[] = [
    'id',
    'code',
    'parking_type',
    'available'
  ];

  action = 'Edit';

  constructor(
    private parkingLotService: ParkingLotService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getParkingLots();
  }

  getParkingLots(): void {
    this.parkingLots$ = this.parkingLotService.getParkingLots();
  }

  goToEditParkingLot(parkingLotId: number) {
    this.router.navigate(['update-parking-lot/' + parkingLotId], {relativeTo: this.activatedRoute.parent});
  }

}
