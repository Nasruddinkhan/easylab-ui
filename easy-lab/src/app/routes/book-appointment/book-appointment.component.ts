import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication/auth.service';
import { User } from '@core/authentication/interface';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {
  selectedType: string ;
  user: User;

  constructor(   private auth: AuthService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.auth
    .user()
    .pipe(
      tap(user => (this.user = user)),
      debounceTime(10)
    )
    .subscribe(() => this.changeDetectorRef.detectChanges());
    console.table( this.user);
  }
  selectAppointmentType(type: string): void {
    this.selectedType = type ;
  }
}
