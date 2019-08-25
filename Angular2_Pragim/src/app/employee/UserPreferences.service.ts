import { Injectable } from '@angular/core'

@Injectable()
export class UserPreferencesService {
  colorPreference: string = "Orange";

  constructor() {
    console.log('New Instance of UserPreferencesService class is created')
  }
}
