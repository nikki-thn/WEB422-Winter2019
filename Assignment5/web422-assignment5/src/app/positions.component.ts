import { Component, OnInit } from '@angular/core';
import { Position } from './position';
import { PositionService } from "./position.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Observable<Position[]>;

  constructor(private m: PositionService) { }

  ngOnInit() {
    //this.positions = this.m.getPositions();
    //this.m.getPositions().subscribe(positions => this.positions = positions);
  }

  ngOnDestroy() {
    //unsubscribe
  }

}
