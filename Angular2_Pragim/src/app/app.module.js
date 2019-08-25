"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//import {RouterModule ,Routes} from '@angular/router'
var app_component_1 = require("./app.component");
var hello_component_1 = require("./hello.component");
var Container_component_1 = require("./employee/Container.component");
var Customer_Pipe_1 = require("./employee/Customer.Pipe");
var employee_service_1 = require("./employee/employee.service");
var nested_component_1 = require("./employee/nested.component");
var home_component_1 = require("./home/home.component");
var notfound_component_1 = require("./others/notfound.component");
var oneEmployeeToDisplay_1 = require("./employee/oneEmployeeToDisplay");
var UserPreferences_service_1 = require("./employee/UserPreferences.service");
var appRouting_module_1 = require("./appRouting.module");
//const appRoutes: Routes = [
//  { path: 'accueil', component: HomeComponent },
//  { path: 'mesemployees', component: ContainerClass },
//  { path: 'mesemployees/:code', component: OneEmployee },
//  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
//  { path: '**', component: NotFoundComponent }
//]
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [employee_service_1.EmployeeService, UserPreferences_service_1.UserPreferencesService],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, appRouting_module_1.AppRoutingModule /*RouterModule.forRoot(appRoutes, {useHash: true})*/],
            declarations: [app_component_1.AppComponent, hello_component_1.HelloComponent, Container_component_1.ContainerClass, Customer_Pipe_1.MyCustomPipe, nested_component_1.NestedClass,
                home_component_1.HomeComponent, notfound_component_1.NotFoundComponent, oneEmployeeToDisplay_1.OneEmployee],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map