import { Component , CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html' ,
     styleUrl: './employee.componentList.scss',
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
   
})

export class EmployeeListComponent {
    employees:any[] = [
        {code: 'emp101', name: 'Tom' , gender: 'Male', salary: 5500 },
        {code: 'emp102', name: 'Alex' , gender: 'Male', salary: 5700 }
    ];
    columnSpan: number = 2;
    firstName: string = 'Deepak';
    lastName: string = 'Kumar' ;
    gender: string = 'Male';
    age: number = 21;
    showDetails: boolean = false;
    toggleDetails(): void{
        this.showDetails = !this.showDetails;
    }
}