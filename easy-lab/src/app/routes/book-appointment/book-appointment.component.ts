import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  selectedType: string ;
  constructor() { }

  ngOnInit(): void {
  }
  selectAppointmentType(type: string): void {
    this.selectedType = type ;
  }
}
