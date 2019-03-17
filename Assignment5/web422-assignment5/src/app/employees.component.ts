import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  
  employees: Employee[];

  //inject the service to the component
  constructor(private m: EmployeeService) { }

  ngOnInit() {
   this.m.getEmployees().subscribe(data => this.employees = data);
  }

  ngOnDestroy(){
    //unsubscribe
  }
}
