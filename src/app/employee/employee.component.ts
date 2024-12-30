
import { Component , CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html' ,
     styleUrl: './employee.component.scss',
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
   
})

export class EmployeeComponent {
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
