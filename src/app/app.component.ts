import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  template:   `
              <div>
                <h1>{{title ? title : 'No title' }}</h1>  
                </div>

                `,
styleUrls:  ['./app.component.scss']

 
  
 
})
export class AppComponent {
  title =  null; //'Employee Details';
}
// <my-employee></my-employee> 
