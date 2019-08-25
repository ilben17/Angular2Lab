import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ContainerClass } from './employee/Container.component';
import { HomeComponent } from './home/home.component'
import { NotFoundComponent } from './others/notfound.component'
import { OneEmployee } from './employee/oneEmployeeToDisplay'


const appRoutes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'mesemployees', component: ContainerClass },
  { path: 'mesemployees/:code', component: OneEmployee },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule] //any class import AppRoutingModule will be exports also RouterModule
})
export class AppRoutingModule { }
