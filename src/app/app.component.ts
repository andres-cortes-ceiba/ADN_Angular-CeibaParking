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
    { url: '/vehicle', nombre: 'Vehicle' },
    { url: '/parking-lot', nombre: 'Parking lot' }
  ];


}
