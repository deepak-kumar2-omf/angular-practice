import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
//import { RouterOutlet } from '@angular/router';
//import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports:  [EmployeeComponent],
  template:   `
              <div>
                <h1>{{title ? title : 'No title' }}</h1>  
                <my-employee></my-employee> 
                </div>
                 
                `,
styleUrls:  ['./app.component.scss']

 
  
 
})
export class AppComponent {
  title =  null; //'Employee Details';
}
// <my-employee></my-employee> 
