import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  @Input() questionArr: number[];
  @Input() level: number;
  arr1;
  arr2;
  constructor() { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.arr1 = this.questionArr.slice(0, this.level);
    this.arr2 = this.questionArr.slice(this.level);
  }

}
