import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.styl']
})
export class CounterComponent implements OnInit {
  @Input() digit = 2;
  @Output() onChange = new EventEmitter<boolean>();

  i:number = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.digit);
  }

  increase() {
    ++this.i;
  }

  decrease() {
    --this.i;
  }
}
