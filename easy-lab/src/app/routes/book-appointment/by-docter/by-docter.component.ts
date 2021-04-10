import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-docter',
  templateUrl: './by-docter.component.html',
  styleUrls: ['./by-docter.component.scss']
})
export class ByDocterComponent implements OnInit {
  selectedFiles: File;
  constructor() { }

  ngOnInit(): void {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
