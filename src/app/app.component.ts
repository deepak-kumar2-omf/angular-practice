import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test1Component } from '../app/components/test1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-angular-app';
}
