import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home} from './src/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  protected readonly title = signal('AngularApp');
}
