import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test1Component } from '../app/components/test1.component';
import { MyEmployeeComponent } from './my-employee/my-employee.component';
@Component({
  selector: 'app-root',
  imports: [MyEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Employee Details';
}
