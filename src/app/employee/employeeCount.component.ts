import { Component , Input, OnChanges, SimpleChanges, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'count-employee' ,
    templateUrl: './employeeCount.component.html',
    styleUrls: ['./employeeCount.component.scss'],
    imports: [CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeCountComponent implements OnChanges { 

    @Input()
    all!: number ;

    @Input()
    male!: number  ;

    @Input()
    female!: number ;

    ngOnChanges(changes: SimpleChanges) { 
      if (changes['all']) { console.log('Total employees:', this.all); } 
      if (changes['male']) { console.log('Total male employees:', this.male); } 
      if (changes['female']) { console.log('Total female employees:', this.female); } 
    }


}