import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from "../enquiry";

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  enquiryForm: FormGroup;
  enquiry: Enquiry = new Enquiry();

  constructor(private enquiryService: EnquiryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    alert("Save Called")
    this.enquiryService    
    .saveEnquiry(this.enquiry).subscribe(data => {
      console.log(data)
      this.enquiry = new Enquiry();      
    }, 
    error => console.log(error));
  }


}
