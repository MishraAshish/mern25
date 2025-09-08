import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Home, 
    About, 
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})

export class App {
  protected readonly title = signal('AngularApp');

  inputCounter1 = 0;
  numberDataOutput = 0;
}
