import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  isNegative = false;
  durationRate:number = 0;
  bigRate:number = 0;
  regRate:number = 0;

  big:number = 0;
  reg:number = 0;
  total:number = 0;
  coin:number = 0;

  onBigChange(i) {
    this.big = i;
    this.calcDurationRate();
  }

  onRegChange(i) {
    this.reg = i;
    this.calcDurationRate();
  }

  onTotalChange(i) {
    this.total = i;
    this.calcDurationRate();
  }

  onCoinChange(i) {
    this.coin = i;
    this.calcDurationRate();
  }

  toggleNegative() {
    this.isNegative = !this.isNegative;
    this.calcDurationRate();
  }

  calcDurationRate() {
    const getCoin = 312 * this.big + 130 * this.reg;
    const nowCoin = this.isNegative ? -this.coin : this.coin;
    const spendCoin = getCoin - nowCoin;
    const result = (this.total / spendCoin) * 50;
    const pow = 100;

    this.durationRate = Math.round(result * pow) / pow;
    this.bigRate = Math.round(this.total / this.big * pow) / pow;
    this.regRate = Math.round(this.total / this.reg * pow) / pow;
  }
}
