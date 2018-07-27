import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.styl']
})
export class CounterComponent implements OnInit {
  @Input() digit = 2;
  @Output() change = new EventEmitter<number>();

  numberList:number[];

  constructor() { }

  ngOnInit() {
    this.numberList = Array(this.digit);
  }

  onChange(n, i) {
    this.numberList[i] = n;
    const sum = this.numberList.reduce((i, j)=>i+j);
    this.change.emit(sum);
  }
}
