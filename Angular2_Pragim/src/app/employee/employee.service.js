"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
// import toPromise operator
//import 'rxjs/add/operator/toPromise';
var EmployeeService = /** @class */ (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get('http://localhost:49993/api/employee')
            .map(function (response) { return response.json(); })
            .catch(this.ErrorHandler /*(err: Response) => { console.log(err); return Observable.throw(err)}*/);
    };
    EmployeeService.prototype.getEmployee = function (code) {
        return this._http.get('http://localhost:49993/api/employee/' + code)
            .map(function (response) { return response.json(); })
            .catch(this.ErrorHandler);
    };
    //In case we want to use Promise instead Observable
    //getEmployee(code: string): Promise<IEmployee> {
    //  return this._http.get('http://localhost:49993/api/employee/' + code)
    //    .map((response: Response) => <IEmployee>response.json())
    //    .toPromise()
    //    .catch(this.ErrorPromiseHandler);
    //}
    EmployeeService.prototype.ErrorHandler = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error);
    };
    EmployeeService.prototype.ErrorPromiseHandler = function (error) {
        console.error(error);
        throw (error);
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map