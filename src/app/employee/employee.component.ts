
import { Component , CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
@Component({
    selector: 'my-employee',
    templateUrl: './employee/employee.component.html' ,
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
   // styleUrls: ['/employee/employee.component.scss']
})

export class EmployeeComponent{
    firstName: string = 'Deepak';
}
