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
var employee_service_1 = require("./employee.service");
var UserPreferences_service_1 = require("../employee/UserPreferences.service");
var ContainerClass = /** @class */ (function () {
    function ContainerClass(_employeeService, _userPreferencesService) {
        this._employeeService = _employeeService;
        this._userPreferencesService = _userPreferencesService;
        this.propertyToFiltreGenderWithNgIf = 'All';
        this.statusMessage = 'Loading Data from database. Please wait...';
    }
    ContainerClass.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (reponseServeur) { return _this.employees = reponseServeur; }, function (error) {
            _this.statusMessage = 'Problème lors appel service ';
            console.error(error);
        });
    };
    ContainerClass.prototype.trackEmployeeByCode = function (index, employee) {
        return employee.code;
    };
    ContainerClass.prototype.getCountMale = function () {
        return this.employees.filter(function (x) { return x.gender == "Male"; }).length;
    };
    ContainerClass.prototype.getCountFemale = function () {
        return this.employees.filter(function (x) { return x.gender == "Female"; }).length;
    };
    ContainerClass.prototype.getCountAll = function () {
        return this.employees.length;
    };
    ContainerClass.prototype.whenCustomEventIsRaise = function (newGender) {
        this.propertyToFiltreGenderWithNgIf = newGender;
    };
    Object.defineProperty(ContainerClass.prototype, "currentColor", {
        get: function () {
            return this._userPreferencesService.colorPreference;
        },
        set: function (value) {
            this._userPreferencesService.colorPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    ContainerClass = __decorate([
        core_1.Component({
            //selector: 'container-tag',
            templateUrl: 'app/employee/Container.component.html',
            styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse;}', 'td, th {border: 1px solid black; }'],
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            UserPreferences_service_1.UserPreferencesService])
    ], ContainerClass);
    return ContainerClass;
}());
exports.ContainerClass = ContainerClass;
//# sourceMappingURL=Container.component.js.map