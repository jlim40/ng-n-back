import { APP_INITIALIZER, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.scss']
})
export class ShowNumberComponent implements OnInit {

  @Input() questionArr: number[];
  @Input() level: number;
  @Input() strArr: string[];
  constructor() { }

  ngOnInit(): void {
    this.initialize();
    this.show();
  }

  initialize() {
    this.strArr = [];
    for(const q of this.questionArr) {
      this.strArr.push("" + q);
      this.strArr.push(" ");
    }
  }

  show() {
    let i=0;
    const card = document.querySelector('#card');
    let timer = setInterval(() => {
      card.innerHTML = this.strArr[i++];
      if (i === this.strArr.length)
      clearInterval(timer);
    }, 2000)
  }
}
