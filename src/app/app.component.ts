import { Component } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/employeeList.component';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports:  [CommonModule,FormsModule,EmployeeComponent,EmployeeListComponent],
  templateUrl: './app.component.html',
styleUrls:  ['./app.component.scss']


})
export class AppComponent {
  title: string  = 'Employee Details';
  imagePath: string = 'pargim-logo-1.png' ;
  isDisabled: boolean = false;
  classesToApply: string = 'italicsClass boldClass';
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean  = false ;
  isBold: boolean = true;
  isItalic: boolean = true;
  fontSize: number = 30;
  firstName: string  = 'Deepak' ;
  lastName: string = 'kumar' ;
  badHtml: string = 'Hello <script>alert("Hacked");</script> World';
  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };
    return classes;
  }
  addStyles() {
    let styles = {
        'font-size.px' : this.fontSize,
        'font-style' : this.isItalic ? 'italic'  : 'normal' ,
        'font-weight' : this.isBold ? 'bold' :'normal',
    }
        return styles;
  }
  onClick(): void{
    console.log('Button Clicked');
  }
  name: string = 'Tom';
  // Method to handle the input event
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement; // Cast the event target
    this.name = input.value; // Update the name property
  }
}
// <my-employee></my-employee> 
