import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { FlightComponent } from './flight/flight.component';

const routes: Routes = [
  {
    path:'',
    component:FlightComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
