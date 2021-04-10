import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-history',
  templateUrl: './report-history.component.html',
  styleUrls: ['./report-history.component.scss']
})
export class ReportHistoryComponent implements OnInit {
  displayedColumns = [ 'checked','createdBy', 'updatedBy',  'appointmentdate', 'testname', 'testgroup'];
  constructor() { }
   
  ngOnInit(): void {
  }
 dataSource = ELEMENT_DATA;

  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }
}
export interface Element {
  checked: boolean;
  testname: string;
  testgroup: string;
  appointmentdate:string;
  highlighted?: boolean;
  hovered?: boolean;
  createdBy:string;
  updatedBy:string;
}

const ELEMENT_DATA: Element[] = [
  { checked: false,  testname: 'test 1', testgroup: "testgroup 1",appointmentdate:"10/04/20201 10:12:33 PM" , createdBy:"Nasruddin",  updatedBy:"Nasruddin"},
  { checked: false,  testname: 'test 2', testgroup: "testgroup 2",appointmentdate:"10/04/20201 10:12:33 PM" ,createdBy:"Nasruddin", updatedBy:"Nasruddin"  },
  { checked: false,  testname: 'test 3', testgroup: "testgroup 3",appointmentdate:"10/04/20201 10:12:33 PM", createdBy:"Nasruddin", updatedBy:"Nasruddin" },
  { checked: false,  testname: 'test 4', testgroup: "testgroup 4",appointmentdate:"10/04/20201 10:12:33 PM", createdBy:"Nasruddin",  updatedBy:"Nasruddin"},
  { checked: false,  testname: 'test 5', testgroup: "testgroup 5",appointmentdate:"10/04/20201 10:12:33 PM", createdBy:"Nasruddin",  updatedBy:"Nasruddin"},
];