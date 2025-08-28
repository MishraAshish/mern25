import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
  count :number = 0;
  count2 :number = 0;
  @Input() inputCounter: number = 0;
  @Output() onCounterChange : EventEmitter<number> = new EventEmitter();

  @Input() numberData : number = 0;

  @Output() numberDataChange : EventEmitter<number> = new EventEmitter();

  handleIncrement() {
    // this.count2 = this.count2 + 1;
    // this.inputCounter = this.inputCounter + 1;
    // this.onCounterChange.emit(this.inputCounter);

    this.numberData = this.numberData + 1; // doing data manipulation
    this.numberDataChange.emit(this.numberData); // sending data back to parent component
  }
  handleDecrement() {
    // this.count2 = this.count2 - 1;
    // this.inputCounter = this.inputCounter - 1;
    // this.onCounterChange.emit(this.inputCounter);

    this.numberData = this.numberData - 1; // doing data manipulation
    this.numberDataChange.emit(this.numberData); // sending data back to parent component
  }
}
