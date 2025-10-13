import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloModule } from './Components/hello/hello.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HelloModule],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
}
