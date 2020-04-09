import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'checkbox',
  styles: [
    `
    .container-checkbox {
      display: flex;
      align-items: center;
      position: relative;
      padding-left: 30px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 1em;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    
    .container-checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    
    .checkmark {
      position: absolute;
      top: 3px;
      left: 0;
      height: 18px;
      width: 18px;
      background-color: #dadada;
      border-radius: 4px;
      /*transition: background-color 0.12s ease-in;*/
    }
    
    .container-checkbox input:checked ~ .checkmark {
      background-color: #3273dc;
    }
    
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    
    .container-checkbox input:checked ~ .checkmark:after {
      display: block;
    }

    .container-checkbox input:disabled{
      cursor: default;
    }
    
    .container-checkbox .checkmark:after {
      left: 6px;
      top: 4px;
      width: 5px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    `
  ],
  template: `
    <label class="container-checkbox">
      <span class="checkbox-label">
        <ng-content></ng-content>
      </span>
      <input class="checkbox" type="checkbox" [checked]="value"
      [disabled]="isDisabled" (change)="onChangeCheckbox($event)">
      <span class="checkmark"></span>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() checked: boolean = false;
  @Output() change: EventEmitter<any>;

  value: boolean;
  isDisabled: boolean;
  onChange = (_: any) => { }
  onTouch = () => { }

  onChangeCheckbox(event) {
    this.value = event.target.checked;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = true;
    } else {
      this.value = false;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}