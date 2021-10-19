import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '@core/modelo/vehicle';

@Pipe({
  name: 'filterVehicleByType'
})
export class FilterVehicleByTypePipe implements PipeTransform {

  transform(value: Vehicle[], arg: string) {
    if (value) {
      return value.filter(vehicle => vehicle.vehicle_type === arg);
    }
    return value;
  }

}
