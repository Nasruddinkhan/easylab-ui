import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core';
import { BookAppointmentComponent } from './book-appointment.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ReportHistoryComponent } from './report-history/report-history.component';

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
    {
      path: 'report-history',
      component: ReportHistoryComponent,
      data: { title: 'report-history', titleI18n: 'report-history' },
    },
    {
      path:"enquiry",
      component: EnquiryComponent,
    }
  ]
}]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookAppointmentRoutingModule { }
