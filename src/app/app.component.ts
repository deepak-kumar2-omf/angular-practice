import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test1Component } from '../app/components/test1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:   `
                <h1>{{ title }}</h1>  
                <my-employee></my-employee> 
                `
 // styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Employee Details';
}
