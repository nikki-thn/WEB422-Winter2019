import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { Position } from './position';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  
  private employees: Employee[];
  private employeesSub: any;
  private filteredEmployees: Employee[];
  private temp: Position;

  //inject the service to the component
  constructor(
    private m: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
   this.employeesSub = this.m.getEmployees().subscribe(data => this.employees = data);
   this.m.getEmployees().subscribe(data => this.filteredEmployees = data);
  }

  ngOnDestroy(){
    //unsubscribe
    if(this.employeesSub) {this.employeesSub.unsubscribe();}
  }

  routeEmployee(_id: string) {
    this.router.navigate(['/employee', _id]);
  }

  onEmployeeSearchKeyUP(event: any) {

    let search = event.target.value.toLowerCase();

    this.filteredEmployees = this.employees.filter((employee) => {
      return (employee.FirstName.toLowerCase().match(search) ||
          employee.LastName.toLowerCase().match(search)
          || employee.Position.PositionName.toLowerCase().match(search))
    });

    if(search == "") {
      this.filteredEmployees = this.employees;
    }
  }
}
