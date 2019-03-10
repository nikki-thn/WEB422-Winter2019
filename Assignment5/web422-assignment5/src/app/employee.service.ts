import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private url = "https://lit-fortress-10601.herokuapp.com/";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + "/employees");
  }
}
