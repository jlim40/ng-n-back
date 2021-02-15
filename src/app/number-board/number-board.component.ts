import { Component, OnInit, NgZone  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'number-board',
  templateUrl: './number-board.component.html',
  styleUrls: ['./number-board.component.scss'],
})
export class NumberBoardComponent implements OnInit {

  numArr: number[];
  questionArr: number[];
  strArr: string[];
  level;
  showNum: boolean = true;
  showResult: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private zone: NgZone) { }

  ngOnInit(): void {

    this.level = +this.route.snapshot.paramMap.get('id');

    this.validateLevel(this.level);
    this.playGame();
  }

  validateLevel(level){
    if (Number.isNaN(level))
      this.router.navigate(['/home']);
    else {
      if (level < 2 || level > 5)
        this.router.navigate(['/home']);
    }
  }

  playGame() {
    this.numArr = [];

    while(this.numArr.length < 3) {
      let r = Math.floor(Math.random() * 10);
      if(this.numArr.indexOf(r) === -1)
        this.numArr.push(r);
    }

    this.questionArr = [];
    const arrLen = this.level + 10;
    for(let i=0; i< arrLen; ++i) {
      let r = Math.floor(Math.random() * 3);
      this.questionArr.push(this.numArr[r]);
    }

    this.finish();
  }

  finish() {
    const delay = (+this.level + 10) * 4000 + 2000;
    // const delay = 0;
    setTimeout(() => {
      this.zone.run(() => {
        this.showNum = false;
        this.showResult = true;
      })
    }, delay);
  }
}
