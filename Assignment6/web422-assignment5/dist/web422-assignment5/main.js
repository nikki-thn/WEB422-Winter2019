(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.component */ "./src/app/employee.component.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./position.component */ "./src/app/position.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var routes = [
    { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'employees', component: _employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"] },
    { path: 'positions', component: _positions_component__WEBPACK_IMPORTED_MODULE_4__["PositionsComponent"] },
    { path: 'employee/:_id', component: _employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"] },
    { path: 'position/:_id', component: _position_component__WEBPACK_IMPORTED_MODULE_6__["PositionComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/*********************************************************************************
* WEB422 – Assignment 05
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Nikki Truong
* Student ID: 112 314 174
* Date: March 9, 2019
*
* Heroku API: https://sheltered-reef-62875.herokuapp.com/
********************************************************************************/


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web422-assignment5';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _positions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./positions.component */ "./src/app/positions.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer.component.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees.component.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content.component */ "./src/app/content.component.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee.component */ "./src/app/employee.component.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position.component */ "./src/app/position.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _positions_component__WEBPACK_IMPORTED_MODULE_9__["PositionsComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _employees_component__WEBPACK_IMPORTED_MODULE_11__["EmployeesComponent"],
                _content_component__WEBPACK_IMPORTED_MODULE_12__["ContentComponent"],
                _employee_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeComponent"],
                _position_component__WEBPACK_IMPORTED_MODULE_14__["PositionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content.component.css":
/*!***************************************!*\
  !*** ./src/app/content.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/content.component.html":
/*!****************************************!*\
  !*** ./src/app/content.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n"

/***/ }),

/***/ "./src/app/content.component.ts":
/*!**************************************!*\
  !*** ./src/app/content.component.ts ***!
  \**************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/employee-raw.ts":
/*!*********************************!*\
  !*** ./src/app/employee-raw.ts ***!
  \*********************************/
/*! exports provided: EmployeeRaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRaw", function() { return EmployeeRaw; });
var EmployeeRaw = /** @class */ (function () {
    function EmployeeRaw(obj) {
    }
    return EmployeeRaw;
}());



/***/ }),

/***/ "./src/app/employee.component.css":
/*!****************************************!*\
  !*** ./src/app/employee.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLGVBQWUsRUFBRSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH0iXX0= */"

/***/ }),

/***/ "./src/app/employee.component.html":
/*!*****************************************!*\
  !*** ./src/app/employee.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"center\">\n  <h2>Employee: </h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f='ngForm' (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"fName.errors\">\n              <label for=\"FirstName\">First Name:</label>\n              <input #fName=\"ngModel\" required [(ngModel)]=\"employee.FirstName\" class=\"form-control\" id=\"FirstName\" type=\"text\" name=\"FirstName\" />\n              <span *ngIf=\"fName.errors\" class=\"help-block\">First Name is Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"lName.errors\">\n              <label for=\"LastName\">Last Name:</label>\n              <input #lName=\"ngModel\" required [(ngModel)]=\"employee.LastName\" class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" />\n              <span *ngIf=\"lName.errors\" class=\"help-block\">Last Name is Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"Position.errors\">\n              <label for=\"Position\">Position:</label>\n              <select #Position=\"ngModel\" [(ngModel)]=\"positions\" class=\"form-control\" id=\"Position\" name=\"Position\">\n                <option *ngFor=\"let pos of positions\" [value]=\"pos._id\">{{pos.PositionName}}</option>\n              </select>\n              <span *ngIf=\"Position.errors\" class=\"help-block\">Position is Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"Salary.errors\">\n              <label for=\"SalaryBonus\">Salary Bonus</label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">$</span>\n                <input #Salary=\"ngModel\" required type=\"number\" [(ngModel)]=\"employee.SalaryBonus\" class=\"form-control\"\n                  id=\"SalaryBonus\" type=\"text\" name=\"SalaryBonus\" />\n              </div>\n              <span *ngIf=\"Salary.errors && Salary.errors.required\" class=\"help-block\">Salary bonus is Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [class.has-error]=\"Street.errors\">\n              <label for=\"AddressStreet\">Address (Street):</label>\n              <input #Street=\"ngModel\" required [(ngModel)]=\"employee.AddressStreet\" class=\"form-control\" id=\"AddressStreet\"\n                type=\"text\" name=\"AddressStreet\" />\n                <span *ngIf=\"Street.errors\" class=\"help-block\">Address is Required</span>\n            </div>        \n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [class.has-error]=\"City.errors\">\n              <label for=\"AddressCity\">Address (City):</label>\n              <input #City=\"ngModel\" required [(ngModel)]=\"employee.AddressCity\" class=\"form-control\" id=\"AddressCity\"\n                type=\"text\" name=\"AddressCity\" />\n              <span *ngIf=\"City.errors\" class=\"help-block\">Address city is Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [class.has-error]=\"State.errors\">\n              <label for=\"AddressState\">Address (State):</label>\n              <input #State=\"ngModel\" required [(ngModel)]=\"employee.AddressState\" class=\"form-control\" id=\"AddressState\"\n                type=\"text\" name=\"AddressState\" />\n              <span *ngIf=\"State.errors\" class=\"help-block\">Address state is Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [class.has-error]=\"ZipCode.errors\">\n              <label for=\"AddressZip\">Address (Zip Code):</label>\n              <input #ZipCode=\"ngModel\" required [(ngModel)]=\"employee.AddressZip\" class=\"form-control\" id=\"AddressZip\"\n                type=\"text\" name=\"AddressZip\" />\n                <span *ngIf=\"ZipCode.errors\" class=\"help-block\">Address zip code is Required</span>\n              </div>\n           </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [class.has-error]=\"PhoneNum.errors\">\n              <label for=\"PhoneNum\">Phone Number:</label>\n              <input pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\" #PhoneNum=\"ngModel\" required [(ngModel)]=\"employee.PhoneNum\" class=\"form-control\" id=\"PhoneNum\"\n                type=\"text\" name=\"PhoneNum\" />\n                <span *ngIf=\"PhoneNum.errors\" class=\"help-block\">Phone number is Required</span>          \n              </div>\n            </div>\n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [class.has-error]=\"Extension.errors\">\n              <label for=\"Extension\">Extension:</label>\n              <input #Extension=\"ngModel\" required [(ngModel)]=\"employee.Extension\" class=\"form-control\" id=\"Extension\"\n                type=\"text\" name=\"Extension\" />\n                <span *ngIf=\"Extension.errors\" class=\"help-block\">Extension is Required</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [class.has-error]=\"HireDate.errors\">\n              <label for=\"HireDate\">Hire Date:</label>\n              <input #HireDate=\"ngModel\" [(ngModel)]=\"employee.HireDate\" class=\"form-control\" id=\"HireDate\"\n                name=\"HireDate\" type=\"text\" value=\"HireDate\" readonly />\n                <span *ngIf=\"HireDate.errors\" class=\"help-block\">Hire Date is Required</span>\n              </div>\n            </div>\n        </div>\n        <hr />\n        <a routerLink=\"/employees\" class=\"btn btn-warning pull-left\">Return to Employee List</a>\n        <input [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div *ngIf=\"successMessage\" class=\"alert alert-success\">\n    <strong>Success!</strong> First Name Last Name's information was successfully saved.\n  </div>\n  <div *ngIf=\"failMessage\" class=\"alert alert-danger\">\n    <strong>Error!</strong> First Name Last Name's information could not be saved.\n  </div>\n</div>\n<br /><br />\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employee.component.ts":
/*!***************************************!*\
  !*** ./src/app/employee.component.ts ***!
  \***************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_raw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-raw */ "./src/app/employee-raw.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position.service */ "./src/app/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(m, p, route) {
        this.m = m;
        this.p = p;
        this.route = route;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employee = new _employee_raw__WEBPACK_IMPORTED_MODULE_2__["EmployeeRaw"]();
        this.paramSubsctiption = this.route.params.subscribe(function (params) {
            _this.employeeSubscription = _this.m.getEmployee(params['_id']).subscribe(function (emp) {
                _this.employee = emp[0];
                _this.getPositionsSubcription = _this.p.getPositions().subscribe(function (data) {
                    _this.positions = data;
                });
            }); // (+) converts string 'id' to a number
            //In a real app: dispatch action to load the details here.
            _this.successMessage = false;
            _this.failMessage = false;
        });
    };
    EmployeeComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.saveEmployeeSubscription = this.m.saveEmployee(this.employee).subscribe(function (okay) {
            _this.successMessage = true;
            console.log("success");
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function (error) {
            _this.failMessage = true;
            console.log("Error occur: ", error);
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubsctiption) {
            this.paramSubsctiption.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubcription) {
            this.getPositionsSubcription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _position_service__WEBPACK_IMPORTED_MODULE_4__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    //injection
    function EmployeeService(http) {
        this.http = http;
        this.url = "https://sheltered-reef-62875.herokuapp.com/";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.url + "employees");
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.put(this.url + "employee/" + employee._id, employee);
    };
    EmployeeService.prototype.getEmployee = function (_id) {
        return this.http.get(this.url + "employee-raw/" + _id);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employees.component.css":
/*!*****************************************!*\
  !*** ./src/app/employees.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLEVBQUU7QUFDMUIsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cbi50YWJsZS1yZXNwb25zaXZle21hcmdpbi1ib3R0b206NjBweDt9Il19 */"

/***/ }),

/***/ "./src/app/employees.component.html":
/*!******************************************!*\
  !*** ./src/app/employees.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Employees</h2>\n      <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search\nEmployees by Full Name or Position\" (keyup)=\"onEmployeeSearchKeyUP($event)\" /><br />\n      <table class=\"table table-condensed table-hover\">\n        <tr>\n          <th>Full Name</th>\n          <th>Position</th>\n          <th>Address</th>\n          <th>Phone Number</th>\n          <th>Hire Date</th>\n        </tr>\n        <tr *ngFor='let emp of filteredEmployees' (click)=\"routeEmployee(emp._id)\">\n          <td>{{emp.FirstName}} {{emp.LastName}}</td>\n          <td>{{emp.Position.PositionName}}</td>\n          <td>{{emp.AddressCity}}</td>\n          <td>{{emp.PhoneNum}}</td>\n          <td>{{emp.HireDate | date : 'longDate'}}</td>\n        </tr>\n      </table>\n      <hr>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employees.component.ts":
/*!****************************************!*\
  !*** ./src/app/employees.component.ts ***!
  \****************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EmployeesComponent = /** @class */ (function () {
    //inject the service to the component
    function EmployeesComponent(m, router) {
        this.m = m;
        this.router = router;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeesSub = this.m.getEmployees().subscribe(function (data) { return _this.employees = data; });
        this.m.getEmployees().subscribe(function (data) { return _this.filteredEmployees = data; });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        //unsubscribe
        if (this.employeesSub) {
            this.employeesSub.unsubscribe();
        }
    };
    EmployeesComponent.prototype.routeEmployee = function (_id) {
        this.router.navigate(['/employee', _id]);
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var search = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (employee) {
            return (employee.FirstName.toLowerCase().match(search) ||
                employee.LastName.toLowerCase().match(search)
                || employee.Position.PositionName.toLowerCase().match(search));
        });
        if (search == "") {
            this.filteredEmployees = this.employees;
        }
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.css":
/*!**************************************!*\
  !*** ./src/app/footer.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/footer.component.html":
/*!***************************************!*\
  !*** ./src/app/footer.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"color-border\"> </div>\n<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2015 Company Name. Design by <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a></div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\"> <a class=\"fa fa-facebook social-icon\" href=\"#\"></a> <a class=\"fa fa-twitter social-icon\" href=\"#\"></a> <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a> <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a> </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--/#footer--> \n"

/***/ }),

/***/ "./src/app/footer.component.ts":
/*!*************************************!*\
  !*** ./src/app/footer.component.ts ***!
  \*************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/*!************************************!*\
  !*** ./src/app/home.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n    padding: 70px 0;\n}\n.no-margin {\n    margin: 0;\n    padding: 0;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDcwcHggMDtcbn1cbi5uby1tYXJnaW4ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufSAiXX0= */"

/***/ }),

/***/ "./src/app/home.component.html":
/*!*************************************!*\
  !*** ./src/app/home.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"item active\" style=\"background-image: url(/assets/images/bg1.jpg)\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-bolt\"></i> Web422 - Assignment 5</span></h1>\n                <h2>Lorem ipsum dolor sit amet</h2>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n    </div>\n    <!--/.carousel-inner-->\n  </div>\n  <!--/.carousel-->\n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\"\n    href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a>\n</section>\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<section id=\"feature\">\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2>Featured Services</h2>\n      <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique\n        bibendum. Nunc quis semper sem.<br>\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-md-6\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-desktop\"></i>\n            <h2>Employees</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n\n        <div class=\"col-md-6\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-cogs\"></i>\n            <h2>Positions</h2>\n            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n\n      </div>\n      <!--/.services-->\n    </div>\n    <!--/.row-->\n  </div>\n  <!--/.container-->\n</section>\n<!--/#feature-->\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav.component.css":
/*!***********************************!*\
  !*** ./src/app/nav.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav.component.html":
/*!************************************!*\
  !*** ./src/app/nav.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n        <a class=\"navbar-brand\" routerLink=\"/home\"><i class=\"fa fa-bolt\"></i> Nikki Truong</a></div>\n      <div class=\"collapse navbar-collapse navbar-right\">\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\"><a routerLink=\"/home\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/employees\">Employees</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"/positions\">Positions</a></li>\n        </ul>\n      </div>\n    </div>\n    <!--/.container--> \n  </nav> <!--/nav--> \n\n</header> <!--/header-->\n\n<div class=\"color-border\"> </div>\n"

/***/ }),

/***/ "./src/app/nav.component.ts":
/*!**********************************!*\
  !*** ./src/app/nav.component.ts ***!
  \**********************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.css":
/*!**********************************************!*\
  !*** ./src/app/page-not-found.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found.component.html":
/*!***********************************************!*\
  !*** ./src/app/page-not-found.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      Page Not Found :(\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position.component.css":
/*!****************************************!*\
  !*** ./src/app/position.component.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc2l0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/position.component.html":
/*!*****************************************!*\
  !*** ./src/app/position.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"center\">\n  <h2>Position: Position Name</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form #f='ngForm' (ngSubmit)=\"onSubmit(f)\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [class.has-error]=\"pName.errors\">\n              <label for=\"PositionName\">Position Name:</label>\n              <input #pName=\"ngModel\" required [(ngModel)]=\"position.PositionName\" class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" />\n              <span *ngIf=\"pName.errors\" class=\"help-block\">Position Name is Required</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [class.has-error]=\"pDescription.errors\">\n              <label for=\"PositionDescription\">Description:</label>\n              <textarea #pDescription=\"ngModel\" required [(ngModel)]=\"position.PositionDescription\" class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\"></textarea>\n              <span *ngIf=\"pDescription.errors\" class=\"help-block\">Position Description is Required</span>\n            </div>\n          </div>\n        </div>\n        <hr />\n        <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n        <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" />\n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n<br />\n<div *ngIf=\"successMessage\" class=\"alert alert-success\">\n  <strong>Success!</strong> Position: \"Position\" was successfully saved.\n</div>\n<div *ngIf=\"failMessage\" class=\"alert alert-danger\">\n  <strong>Error!</strong> Position: \"Position\" could not be saved.\n</div>\n</div>\n<br /><br />\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/position.component.ts":
/*!***************************************!*\
  !*** ./src/app/position.component.ts ***!
  \***************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position.service */ "./src/app/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position */ "./src/app/position.ts");





var PositionComponent = /** @class */ (function () {
    function PositionComponent(p, route) {
        this.p = p;
        this.route = route;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.position = new _position__WEBPACK_IMPORTED_MODULE_4__["Position"]();
        this.successMessage = false;
        this.failMessage = false;
        this.paramSubsctiption = this.route.params.subscribe(function (params) {
            _this.positionSubscription = _this.p.getPosition(params['_id']).subscribe(function (pos) {
                _this.position = pos[0];
            });
        }); // (+) converts string 'id' to a number
        //In a real app: dispatch action to load the details here.
    };
    PositionComponent.prototype.onSubmit = function (f) {
        var _this = this;
        console.log("heree", this.position);
        this.savePositionSubscription = this.p.savePosition(this.position).subscribe(function (okay) {
            _this.successMessage = true;
            console.log("success");
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function (error) {
            _this.failMessage = true;
            console.log("Error occur: ", error);
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubsctiption) {
            this.paramSubsctiption.unsubscribe();
        }
        if (this.positionSubscription) {
            this.positionSubscription.unsubscribe();
        }
        if (this.savePositionSubscription) {
            this.savePositionSubscription.unsubscribe();
        }
    };
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.css */ "./src/app/position.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/position.service.ts":
/*!*************************************!*\
  !*** ./src/app/position.service.ts ***!
  \*************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
        this.url = "https://sheltered-reef-62875.herokuapp.com/";
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get(this.url + "positions");
    };
    PositionService.prototype.savePosition = function (position) {
        return this.http.put(this.url + "position/" + position._id, position);
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get(this.url + "position/" + id);
    };
    PositionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/position.ts":
/*!*****************************!*\
  !*** ./src/app/position.ts ***!
  \*****************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var Position = /** @class */ (function () {
    function Position(obj) {
    }
    return Position;
}());



/***/ }),

/***/ "./src/app/positions.component.css":
/*!*****************************************!*\
  !*** ./src/app/positions.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }\n.table-responsive{margin-bottom:60px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxlQUFlLEVBQUU7QUFDMUIsa0JBQWtCLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcG9zaXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyeyBtYXJnaW4tdG9wOjQwcHg7IH1cbi50YWJsZS1yZXNwb25zaXZle21hcmdpbi1ib3R0b206NjBweDt9Il19 */"

/***/ }),

/***/ "./src/app/positions.component.html":
/*!******************************************!*\
  !*** ./src/app/positions.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Positions</h2>\n      <table class=\"table table-condensed table-hover\">\n        <tr>\n          <th>Title</th>\n          <th>Description</th>\n          <th>Salary</th>\n        </tr>\n        <tr *ngFor='let pos of positions' (click)=\"routePosition(pos._id)\">\n          <td>{{pos.PositionName}}</td>\n          <td>{{pos.PositionDescription}}</td>\n          <td>${{pos.PositionBaseSalary | number: '.2'}}</td>\n        </tr>\n      </table>\n      <hr>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/positions.component.ts":
/*!****************************************!*\
  !*** ./src/app/positions.component.ts ***!
  \****************************************/
/*! exports provided: PositionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsComponent", function() { return PositionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _position_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position.service */ "./src/app/position.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PositionsComponent = /** @class */ (function () {
    //inject the service to the component
    function PositionsComponent(m, router) {
        this.m = m;
        this.router = router;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.m.getPositions().subscribe(function (data) { return _this.positions = data; });
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        //unsubscribe
        if (this.positionsSub) {
            this.positionsSub.unsubscribe();
        }
    };
    PositionsComponent.prototype.routePosition = function (_id) {
        console.log(_id);
        this.router.navigate(['/position', _id]);
    };
    PositionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-positions',
            template: __webpack_require__(/*! ./positions.component.html */ "./src/app/positions.component.html"),
            styles: [__webpack_require__(/*! ./positions.component.css */ "./src/app/positions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_position_service__WEBPACK_IMPORTED_MODULE_2__["PositionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PositionsComponent);
    return PositionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikkithn/Documents/WEB422/Assignment6/web422-assignment5/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map