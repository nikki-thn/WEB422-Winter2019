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
  
  employees: Observable<Employee[]>;

  constructor(private m: EmployeeService) { }

  ngOnInit() {
    this.employees = this.m.getEmployees();
  }
}
