import { Component, OnInit } from '@angular/core';
export interface Element {
  checked: boolean;
  testname: string;
  testgroup: string;
  highlighted?: boolean;
  hovered?: boolean;
  amt?:Number;
}

const ELEMENT_DATA: Element[] = [
  { checked: false,  testname: 'test 1', testgroup: "testgroup 1",amt:500.00 },
  { checked: false,  testname: 'test 2', testgroup: "testgroup 2",amt:500.00 },
  { checked: false,  testname: 'test 3', testgroup: "testgroup 3",amt:500.00 },
  { checked: false,  testname: 'test 4', testgroup: "testgroup 4",amt:500.00 },
  { checked: false,  testname: 'test 5', testgroup: "testgroup 5",amt:500.00 },
];
@Component({
  selector: 'app-by-stafff',
  templateUrl: './by-stafff.component.html',
  styleUrls: ['./by-stafff.component.scss']
})
export class ByStafffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns = [ 'testname', 'testgroup', 'amt'];
  dataSource = ELEMENT_DATA;

  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }
}
