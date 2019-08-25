import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {RouterModule ,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContainerClass } from './employee/Container.component';
import { MyCustomPipe } from './employee/Customer.Pipe';
import { EmployeeService} from './employee/employee.service'
import { NestedClass } from './employee/nested.component';
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './others/notfound.component'
import { OneEmployee } from './employee/oneEmployeeToDisplay'
import { UserPreferencesService } from './employee/UserPreferences.service';

import { AppRoutingModule} from './appRouting.module';

//const appRoutes: Routes = [
//  { path: 'accueil', component: HomeComponent },
//  { path: 'mesemployees', component: ContainerClass },
//  { path: 'mesemployees/:code', component: OneEmployee },
//  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
//  { path: '**', component: NotFoundComponent }
//]

@NgModule({
  providers: [EmployeeService, UserPreferencesService],
  imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule/*RouterModule.forRoot(appRoutes, {useHash: true})*/],
  declarations: [AppComponent, HelloComponent, ContainerClass, MyCustomPipe, NestedClass,
    HomeComponent, NotFoundComponent, OneEmployee],
  bootstrap: [AppComponent]
})
export class AppModule { }
