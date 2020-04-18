import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  host: {
    'tabindex': '-1',
    //'role': 'radio',
    //'aria-checked': 'true'
  },
  selector: 'chew-radio-button',
  styleUrls: [
    './chew-radio-button.component.scss'
  ],
  template: `
    <label class="radio-button-label">
      <div class="radio-button-container">
          <input [value]="value" type="radio" name="radio" (change)="onChangeRadioButton($event)" [checked]="checked" tabindex="0">
          <span class="checkmark"></span>
        </div>
        <div class="radio-button-label-content">
          <ng-content></ng-content>
        </div>
    </label>
  `
})
export class ChewRadioButtonComponent {

  @Input() checked: boolean = false;
  @Output() change = new EventEmitter<any>();

  @Input() value: string;
  isDisabled: boolean;

  onChangeRadioButton(event) {
    this.change.emit(event.target.value);
  }
}