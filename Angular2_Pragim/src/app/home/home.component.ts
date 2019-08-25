import { Component} from '@angular/core'
import { UserPreferencesService} from '../employee/UserPreferences.service'

@Component({
  templateUrl: 'app/home/home.component.html'
})

export class HomeComponent
{
  constructor(private _userPreferencesService: UserPreferencesService) { }

  get currentColor(): string {
    return this._userPreferencesService.colorPreference;
  }

  set currentColor(value : string){
    this._userPreferencesService.colorPreference = value;
  }
}
