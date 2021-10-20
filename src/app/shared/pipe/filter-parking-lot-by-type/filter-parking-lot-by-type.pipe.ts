import { Pipe, PipeTransform } from '@angular/core';
import { ParkingLot } from '@core/modelo/parking-lot';

@Pipe({
  name: 'filterParkingLotByType'
})
export class FilterParkingLotByTypePipe implements PipeTransform {

  transform(value: ParkingLot[], arg: string) {
    if (value) {
      return value.filter(parkingLot => parkingLot.parking_type === arg);
    }
    return value;
  }

}
