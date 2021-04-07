import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-by-self',
  templateUrl: './by-self.component.html',
  styleUrls: ['./by-self.component.scss']
})
export class BySelfComponent implements OnInit {
  bySelfComponentForm: FormGroup;
   displayedColumns = [ 'testname', 'testgroup'];
  dataSource = ELEMENT_DATA;

  highlight(element: Element) {
    element.highlighted = !element.highlighted;
  }
  constructor(private fb: FormBuilder) {
    this.bySelfComponentForm = this.fb.group({
      testPackage: ['', [Validators.required]],
      testGroup: ['', [Validators.required]],
      paymentmode: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

}
export interface Element {
  checked: boolean;
  testname: string;
  testgroup: string;
  highlighted?: boolean;
  hovered?: boolean;
}

const ELEMENT_DATA: Element[] = [
  { checked: false,  testname: 'test 1', testgroup: "testgroup 1" },
  { checked: false,  testname: 'test 2', testgroup: "testgroup 2" },
  { checked: false,  testname: 'test 3', testgroup: "testgroup 3" },
  { checked: false,  testname: 'test 4', testgroup: "testgroup 4" },
  { checked: false,  testname: 'test 5', testgroup: "testgroup 5" },
];
