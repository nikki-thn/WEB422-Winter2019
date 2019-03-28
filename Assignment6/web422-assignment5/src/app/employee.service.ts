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

  saveEmployee(employee: EmployeeRaw): Observable<any>{
    return this.http.put<any>(this.url + "employee/" + employee._id, employee);
  }

  getEmployee(_id: string): Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>(this.url + "employee-raw/" + _id);
  }
}
