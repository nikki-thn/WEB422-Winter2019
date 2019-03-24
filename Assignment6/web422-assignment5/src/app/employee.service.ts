import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Employee } from './employee';
import { EmployeeRaw } from './employee-raw';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private url = "https://sheltered-reef-62875.herokuapp.com/";

   //injection
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + "employees");
  }

  saveEmployee(employee: EmployeeRaw) {
    return this.http.put<any>("someURL/", employee);
  }

  getEmployee(id){
    return this.http.get<Employee[]>("someURL/employee-raw/" + id);
  }
}
