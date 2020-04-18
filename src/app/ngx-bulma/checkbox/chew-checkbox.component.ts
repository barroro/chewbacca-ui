import { Component, Input, Output, EventEmitter, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';
import { ThemePalette } from '../toggle-switch/toggle-switch.component';

@Component({
  // host: {
  //   'tabIndex': '0',
  //   'role': 'checkbox'
  // },
  selector: 'chew-checkbox',
  styleUrls: ['./chew-checkbox.component.scss'],
  template: `
    <label class="container-checkbox">
      <span class="checkbox-label">
        <ng-content></ng-content>
      </span>
      <input class="checkbox" type="checkbox" [checked]="innerValue"
      [disabled]="isDisabled" (change)="onChangeCheckbox($event)" tabIndex="0" aria-checked="false">
      <span class="checkmark"></span>
      <span class="checkmark-focus-indicator"></span>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChewCheckboxComponent),
      multi: true
    }
  ]
})
export class ChewCheckboxComponent implements ControlValueAccessor {

  @Input() checked: boolean = false;
  @Input() color: ThemePalette;
  @Output() change: EventEmitter<any>;

  innerValue: boolean;
  isDisabled: boolean;
  onChange = (_: any) => { }
  onTouch = () => { }

  get value(): boolean {
    return this.innerValue;
  };

  set value(v: boolean) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChange(v);
    }
  }

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
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    if (event.keyCode == ENTER) {
      this.innerValue = !this.innerValue;
      this.onTouch();
      this.onChange(this.value);
    }
  }
}