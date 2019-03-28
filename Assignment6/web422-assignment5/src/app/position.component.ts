import { Component, OnInit } from '@angular/core';
import { PositionService } from './position.service';
import { ActivatedRoute } from '@angular/router';
import { Position } from './position';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  private paramSubsctiption: any;
  private positionSubscription: any;
  private savePositionSubscription: any;
  private position: Position;
  private successMessage: boolean;
  private failMessage: boolean;

  constructor(
    private p: PositionService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.position = new Position();
    this.successMessage = false;
    this.failMessage = false; 

    this.paramSubsctiption = this.route.params.subscribe(params => {
      this.positionSubscription = this.p.getPosition(params['_id']).subscribe(pos => {
        this.position = pos[0];
        });
      }); // (+) converts string 'id' to a number
      //In a real app: dispatch action to load the details here.
  }

  onSubmit(f: NgForm) :void{
    console.log("heree", this.position);
    this.savePositionSubscription = this.p.savePosition(this.position).subscribe(
      (okay)=>{
        this.successMessage = true;
        console.log("success");
        setTimeout(()=>{
          this.successMessage = false;
        },2500)
      },(error)=> {
        this.failMessage = true;
        console.log("Error occur: ", error);
        setTimeout(()=>{
          this.failMessage = false;
        },2500)
      });
  }

  ngOnDestroy() {
    if(this.paramSubsctiption){this.paramSubsctiption.unsubscribe();}
    if(this.positionSubscription){this.positionSubscription.unsubscribe();}
    if(this.savePositionSubscription){this.savePositionSubscription.unsubscribe();}
  }

}
