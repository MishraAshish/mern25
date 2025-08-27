import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
  count :number = 0;

  count2 :number = 0;

  handleIncrement() {
    this.count2 = this.count2 + 1;
  }
  handleDecrement() {
    this.count2 = this.count2 - 1;
  }
}
