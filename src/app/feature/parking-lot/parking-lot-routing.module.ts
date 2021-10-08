import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateParkingLotComponent } from './components/create-parking-lot/create-parking-lot.component';
import { ListParkingLotComponent } from './components/list-parking-lot/list-parking-lot.component';
import { UpdateParkingLotComponent } from './components/update-parking-lot/update-parking-lot.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'list-parking-lot',
    pathMatch: 'full'
  },
  {
    path: 'list-parking-lot',
    component: ListParkingLotComponent,
  },
  {
    path: 'create-parking-lot',
    component: CreateParkingLotComponent,
  },
  {
    path: 'update-parking-lot',
    component: UpdateParkingLotComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingLotRoutingModule { }
