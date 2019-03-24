import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Position } from './position';

@Injectable({
  providedIn: 'root'
})

export class PositionService {

  private url = "https://sheltered-reef-62875.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>(this.url + "positions");
  }

  savePosition(position: Position) {
    return this.http.put<any>("someURL/", position);
  }

  getPosition(id){
    return this.http.get<Position[]>("someURL/employee-raw/" + id);
  }

}
