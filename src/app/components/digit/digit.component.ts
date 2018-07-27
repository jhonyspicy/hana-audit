import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.styl']
})
export class DigitComponent implements OnInit {
  @Input() digit:number;
  @Output() change = new EventEmitter<number>();

  i:number = 0;
  magnification:number = 0;

  constructor() { }

  ngOnInit() {
    this.magnification = Math.pow(10, this.digit - 1);
  }

  increase() {
    if (9 <= this.i) {
      this.i = 0;
    } else {
      ++this.i;
    }

    this.change.emit(this.i * this.magnification);
  }

  decrease() {
    if (this.i <= 0) {
      this.i = 9;
    } else {
      --this.i;
    }

    this.change.emit(this.i * this.magnification);
  }
}
