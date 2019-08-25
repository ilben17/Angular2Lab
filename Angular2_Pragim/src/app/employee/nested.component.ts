import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'nested-container',
  templateUrl: 'app/employee/nested.component.html'
})
export class NestedClass {
  @Input()
  totalAll: number;

  @Input()
  totalMale: number;

  @Input()
  totalFemale: number;

  //property for track gender selected
  selectedRadioButtonValue: string = 'All';

  @Output()
  //customEvent
  myCustomEvent: EventEmitter<string> = new EventEmitter<string>();

  //method wich raise myCustonEvents
  raiseCustomEvent() {
    this.myCustomEvent.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue)
  }
}
