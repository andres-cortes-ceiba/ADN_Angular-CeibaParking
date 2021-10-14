import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'order',
    pathMatch: 'full'
  },
  {
    path: 'order',
    loadChildren: () => import('./feature/order/order.module').then(mod => mod.OrderModule)
  },
  {
    path: 'parking-lot',
    loadChildren: () => import('./feature/parking-lot/parking-lot.module').then(mod => mod.ParkingLotModule)
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./feature/vehicle/vehicle.module').then(mod => mod.VehicleModule)
  },
  {
    path: '**',
    redirectTo: 'order',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
