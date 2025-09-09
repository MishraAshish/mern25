import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { UserServices } from '../../user-services';

@Component({
  selector: 'app-home',
  imports: [ CommonModule ],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {

  items: string[] = [];

  users: any;

  constructor(private userService: UserServices, private cdREf: ChangeDetectorRef) {
    this.items = this.userService.getData(); //this service method is called to get data

    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log('Users data fetched:', this.users);
      this.cdREf.detectChanges(); // Manually trigger change detection
    });
  }

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
