import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private baseUrl = 'http://localhost:8083/enquiry';

  constructor(private http: HttpClient) { }

  saveEnquiry(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }
}
