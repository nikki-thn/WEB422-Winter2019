import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from './employee-raw';
import { Position } from './position';
import { EmployeeService } from './employee.service';
import { PositionService } from './position.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  private paramSubsctiption: any;
  private employeeSubscription: any;
  private getPositionsSubcription: any;
  private saveEmployeeSubscription: any;
  private employee: EmployeeRaw;
  private positions: Position[];
  private successMessage: boolean;
  private failMessage: boolean;

  constructor(
    private m: EmployeeService, 
    private p: PositionService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.successMessage = false;
    this.failMessage = false; 
    this.paramSubsctiption = this.route.params.subscribe(params => {
      this.employeeSubscription = this.m.getEmployee(params['_id']).subscribe(emp => {
        this.employee = emp[0];

        this.getPositionsSubcription = this.p.getPositions().subscribe(data => {
          this.positions = data;
        });
      }); // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
   });
  }
  
  onSubmit(f: NgForm): void{
    this.saveEmployeeSubscription = this.m.saveEmployee(this.employee).subscribe(()=>{
      this.successMessage = true;
      console.log("success");
      setTimeout(()=>{
        this.failMessage = true;
      },2500)
    });
  }

  ngOnDestroy() {
    if(this.paramSubsctiption){this.paramSubsctiption.unsubscribe();}
 }

}
