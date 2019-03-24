import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  
  employees: Employee[];
  filteredEmployees: Employee[];

  private employeesSub: any;
  //inject the service to the component
  constructor(private m: EmployeeService, private router: Router) { }

  ngOnInit() {
   this.employeesSub = this.m.getEmployees().subscribe(data => this.employees = data);
  }

  ngOnDestroy(){
    //unsubscribe
    if(this.employeesSub) {this.employeesSub.unsubscribe(); }
  }


  onEmployeeSearchKeyUP(event:any){
    
  }
}
