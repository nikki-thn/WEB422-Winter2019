import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  private paramSubscription: any;
  private positionSubscription: any;
  private savePositionSubscription: any;
  private position: Position;
  private successMessage: boolean;
  private failMessage: boolean;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm): void { //needs to pass in ngForm
   

  } 

  ngOnDestroy(){
    
  }

}
