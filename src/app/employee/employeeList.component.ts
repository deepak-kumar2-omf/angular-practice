import { Component , CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'list-employee' ,
    templateUrl: './employeeList.component.html',
   styleUrl: './employeeList.component.scss',
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeListComponent {
   employees:any[];
   constructor() {
    this.employees 
   
   = [
       {code: 'emp101', name: 'Tom' , gender: 'Male', salary: 5500 ,dateOfBirth: '01/25/1988'},
       {code: 'emp102', name: 'Alex' , gender: 'Male', salary: 1115700.95 ,dateOfBirth: '09/06/1982' },
       {code: 'emp103', name: 'David' , gender: 'Female', salary: 6500,dateOfBirth: '12/10/1980'}
   ];
}

getEmployees():void{
    this.employees
    = [
        {code: 'emp101', name: 'Tom' , gender: 'Male', salary: 5500 ,dateOfBirth: '01/06/1988'},
        {code: 'emp102', name: 'Alex' , gender: 'Male', salary: 5700.95,dateOfBirth: '09/06/1982'},
        {code: 'emp103', name: 'David' , gender: 'Female', salary: 6500,dateOfBirth: '12/10/1980' },
        {code: 'emp104', name: 'Steve' , gender: 'Female', salary: 6500,dateOfBirth: '12/10/1985'}
    ];
}
trackByEmpCode(index: number,employee:any){
    return employee.code;
}

getTotalEmployeesCount(): number {
    return this.employees.length;
}
getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Male").length;
}

getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === "Female").length;
}
}