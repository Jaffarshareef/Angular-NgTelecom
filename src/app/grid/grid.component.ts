import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit,OnChanges {

  @Input() columnHeading: string[];
  @Input() data: any;
  records: any;
  keys: string[];
  @Input() srchString: string;
  qry: string;
  constructor() { }

  ngOnInit() {

    console.log(this.columnHeading);
    console.log(this.data);
   }

   ngOnChanges() {
     this.records = this.data;
     this.qry = this.srchString;

     this.keys = Object.keys(this.records[0]);


     console.log(this.records);
   }
}
