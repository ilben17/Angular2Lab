"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Container_component_1 = require("./employee/Container.component");
var home_component_1 = require("./home/home.component");
var notfound_component_1 = require("./others/notfound.component");
var oneEmployeeToDisplay_1 = require("./employee/oneEmployeeToDisplay");
var appRoutes = [
    { path: 'accueil', component: home_component_1.HomeComponent },
    { path: 'mesemployees', component: Container_component_1.ContainerClass },
    { path: 'mesemployees/:code', component: oneEmployeeToDisplay_1.OneEmployee },
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
            exports: [router_1.RouterModule] //any class import AppRoutingModule will be exports also RouterModule
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=appRouting.module.js.map