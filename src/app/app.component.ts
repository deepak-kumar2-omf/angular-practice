import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
//import { RouterOutlet } from '@angular/router';
//import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports:  [EmployeeComponent],
  templateUrl: './app.component.html',
styleUrls:  ['./app.component.scss']

 
  
 
})
export class AppComponent {
  title = 'Employee Details';
}
// <my-employee></my-employee> 
