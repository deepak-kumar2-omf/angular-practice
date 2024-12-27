import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyEmployeeComponent } from './my-employee/my-employee.component';

@NgModule({
    declarations: [
        AppComponent,       // Main app component
        MyEmployeeComponent   // Employee component
    ],
    imports: [
        BrowserModule       // Required module for running Angular apps
    ],
    providers: [],
    bootstrap: [AppComponent] // Bootstrap the main app component
})
export class AppModule { }
