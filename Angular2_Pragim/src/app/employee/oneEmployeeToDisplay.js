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
var router_1 = require("@angular/router");
var employee_service_1 = require("./employee.service");
// Import rxjs retry operator
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retrywhen");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/scan");
var OneEmployee = /** @class */ (function () {
    function OneEmployee(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = 'Loading data....';
    }
    OneEmployee.prototype.back = function () {
        this._router.navigate(['/mesemployees']);
    };
    OneEmployee.prototype.ngOnInit = function () {
        var _this = this;
        var codeToSearch = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._employeeService.getEmployee(codeToSearch)
            //Faire plusieurs tentatives d,appel au serveur si y a un probleme (Pour voir le resultat naviguer vers oneEmployeeToDisplay, arreter le service web puis reloader la meme page)
            // Retry 5 times maximum with a delay of 1 second
            // between each retry attempt
            .retryWhen(function (err) {
            return err.scan(function (retryCount, val) {
                retryCount += 1;
                if (retryCount < 6) {
                    _this.statusMessage = 'Retrying...Attempt #' + retryCount;
                    return retryCount;
                }
                else {
                    throw (err);
                }
            }, 0 /*seed: commence a compter a partir de 0*/).delay(1000);
        })
            .subscribe(function (dataResponse) {
            if (dataResponse == null) {
                _this.statusMessage = "This employee doesn't exist";
            }
            else {
                _this.employee = dataResponse;
            }
        }, function (error) {
            _this.statusMessage = 'Problem with the service';
            console.log(error);
        });
        //si on veut utiliser Promise au lieu de Observable
        //this._employeeService.getEmployee(codeToSearch)
        //  .then((dataResponse) => {
        //    if (dataResponse == null) {
        //      this.statusMessage = "This employee doesn't exist"
        //    } else {
        //      this.employee = dataResponse;
        //    }
        //  })
        //  .catch((error) => {
        //    this.statusMessage = 'Problem with the service';
        //    console.log(error)
        //  });
    };
    OneEmployee.prototype.unsubscribe = function () {
        this.statusMessage = "Request is cancelled";
        this.subscription.unsubscribe();
    };
    OneEmployee = __decorate([
        core_1.Component({
            templateUrl: './oneEmployeeToDisplay.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], OneEmployee);
    return OneEmployee;
}());
exports.OneEmployee = OneEmployee;
//# sourceMappingURL=oneEmployeeToDisplay.js.map