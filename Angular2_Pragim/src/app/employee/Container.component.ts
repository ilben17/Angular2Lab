import { Component, Pipe, PipeTransform } from '@angular/core';
import { OnInit } from '@angular/core';
import { IEmployee } from './employee.model';
import { EmployeeService } from './employee.service';
import { UserPreferencesService } from '../employee/UserPreferences.service';


@Component({
  //selector: 'container-tag',
  templateUrl: 'app/employee/Container.component.html',
  styles: ['table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse;}', 'td, th {border: 1px solid black; }'],
})

export class ContainerClass implements OnInit
{
  employees: IEmployee[];

  propertyToFiltreGenderWithNgIf: string = 'All';

  statusMessage: string = 'Loading Data from database. Please wait...';

  constructor(private _employeeService: EmployeeService,
    private _userPreferencesService: UserPreferencesService) { }

  ngOnInit(){
    this._employeeService.getEmployees()
      .subscribe((reponseServeur) => this.employees = reponseServeur,
        (error) => {
          this.statusMessage = 'Problème lors appel service ';
          console.error(error);
        });
  } 

  trackEmployeeByCode(index: number, employee: any): string {
    return employee.code;
  }

  getCountMale(): number {
    return this.employees.filter(x => x.gender == "Male").length;
  }

  getCountFemale(): number {
    return this.employees.filter(x => x.gender == "Female").length;
  }

  getCountAll(): number {
    return this.employees.length;
  }

  whenCustomEventIsRaise(newGender: string): void {
    this.propertyToFiltreGenderWithNgIf = newGender;
  }

  get currentColor(): string {
    return this._userPreferencesService.colorPreference;
  }

  set currentColor(value: string) {
    this._userPreferencesService.colorPreference = value;
  }
}
