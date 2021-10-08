import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app-base';
  public companies: MenuItem[] = [
    { url: '/order', nombre: 'Order' },
    { url: '/order/create-order', nombre: 'Create order' },
    { url: '/vehicle', nombre: 'Vehicle' },
    { url: '/vehicle/create-vehicle', nombre: 'Create vehicle' },
    { url: '/parking-lot', nombre: 'Parking lot' },
    { url: '/parking-lot/create-parking-lot', nombre: 'Create parking lot' }

  ];


}
