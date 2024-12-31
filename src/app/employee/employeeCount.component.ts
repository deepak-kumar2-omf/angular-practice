import { Component , Input, OnChanges, SimpleChanges,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'count-employee' ,
    templateUrl: './employeeCount.component.html',
    styleUrl: './employeeCount.component.scss',
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeCountComponent implements OnChanges { 

    @Input()
    all   = 0;

    @Input()
    male  = 0;

    @Input()
    female  = 0;

    ngOnChanges(changes: SimpleChanges): void {
        // Log the changes to see if inputs are being passed correctly
        if (changes['all']) {
          console.log('All Employees Count:', this.all);
        }
        if (changes['male']) {
          console.log('Male Employees Count:', this.male);
        }
        if (changes['female']) {
          console.log('Female Employees Count:', this.female);
        }
      }
//all: number = 10;
//male: number = 5;
//female: number = 5;

}