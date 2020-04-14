import { Component, Input, Output, EventEmitter, forwardRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';

@Component({
  host: {
    'tabIndex': '0',
    'role': 'checkbox'
  },
  selector: 'toggle-switch',
  styleUrls: [
    './toggle-switch.component.scss'
  ],
  template: `
    <label class="switch">
      <div class="toggle-bar">
        <input type="checkbox" (change)="toggleChange($event)" [checked]="checked">
        <span class="slider round"></span>
      </div>
      <span class="toggle-content">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true
    }
  ]
})
export class ToggleSwitchComponent implements ControlValueAccessor {

  @Input() checked: boolean = false;
  @Output() change: EventEmitter<any>;

  value: boolean;
  isDisabled: boolean;
  onChange = (_: any) => { }
  onTouch = () => { }

  toggleChange(event) {
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
      this.checked = !this.value;
      this.value = !this.value;
      this.onTouch();
      this.onChange(this.value);
    }
  }
}