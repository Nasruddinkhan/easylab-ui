import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core';
import { BookAppointmentComponent } from './book-appointment.component';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [
    { path: '', redirectTo: 'bookappointment', pathMatch: 'full' },
    {
      path: 'bookappointment',
      component: BookAppointmentComponent,
      data: { title: 'bookappointment', titleI18n: 'bookappointment' },
    },
  ]
}]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookAppointmentRoutingModule { }
