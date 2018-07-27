import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { DigitComponent } from './components/digit/digit.component';
import { RangePipePipe } from './pipes/range-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DigitComponent,
    RangePipePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
