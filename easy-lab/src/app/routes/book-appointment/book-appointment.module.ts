import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookAppointmentRoutingModule } from './book-appointment-routing.module';
import { BookAppointmentComponent } from './book-appointment.component';
import { SharedModule } from '@shared';
import { BySelfComponent } from './by-self/by-self.component';
import { ByDocterComponent } from './by-docter/by-docter.component';
import { ReportHistoryComponent } from './report-history/report-history.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ByStafffComponent } from './by-stafff/by-stafff.component';


@NgModule({
  declarations: [
    BookAppointmentComponent,
    BySelfComponent,
    ByDocterComponent,
    ReportHistoryComponent,
    EnquiryComponent,
    ByStafffComponent
  ],
  imports: [
    CommonModule,
    BookAppointmentRoutingModule,
    SharedModule
  ]
})
export class BookAppointmentModule { }
