import { Component, OnInit } from '@angular/core';
import { Position } from './position';
import { PositionService } from "./position.service";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  private positionsSub: any;

  //inject the service to the component
  constructor(private m: PositionService) { }

  ngOnInit() {
    this.m.getPositions().subscribe(data => this.positions = data);
  }

  ngOnDestroy(){
    //unsubscribe
    if(this.positionsSub) {this.positionsSub.unsubscribe(); }
  }

}
