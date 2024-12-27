import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'my-employee',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './my-employee.component.html',
  styleUrl: './my-employee.component.scss'
})
export class MyEmployeeComponent {
  firstName: string = 'Deepak';
}
