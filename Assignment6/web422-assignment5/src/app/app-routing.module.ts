import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { EmployeesComponent } from "./employees.component";
import { PositionsComponent } from "./positions.component";
import { EmployeeComponent } from "./employee.component";
import { PositionComponent } from "./position.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'positions', component: PositionsComponent },
  { path: 'employee/:_id', component: EmployeeComponent },
  { path: 'position/:_id', component: PositionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
