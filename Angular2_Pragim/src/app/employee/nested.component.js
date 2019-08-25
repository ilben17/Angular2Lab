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
var NestedClass = /** @class */ (function () {
    function NestedClass() {
        //property for track gender selected
        this.selectedRadioButtonValue = 'All';
        //customEvent
        this.myCustomEvent = new core_1.EventEmitter();
    }
    //method wich raise myCustonEvents
    NestedClass.prototype.raiseCustomEvent = function () {
        this.myCustomEvent.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NestedClass.prototype, "totalAll", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NestedClass.prototype, "totalMale", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], NestedClass.prototype, "totalFemale", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], NestedClass.prototype, "myCustomEvent", void 0);
    NestedClass = __decorate([
        core_1.Component({
            selector: 'nested-container',
            templateUrl: 'app/employee/nested.component.html'
        })
    ], NestedClass);
    return NestedClass;
}());
exports.NestedClass = NestedClass;
//# sourceMappingURL=nested.component.js.map