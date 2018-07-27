import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'My first Pages';

  onBigChange(i) {
    console.log('Big is ' + i);
  }

  onRegChange(i) {
    console.log('Reg is ' + i);
  }

  onTotalChange(i) {
    console.log('Reg is ' + i);
  }
}
