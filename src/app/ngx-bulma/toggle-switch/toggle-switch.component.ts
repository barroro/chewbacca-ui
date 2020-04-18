import { Component, Input, Output, EventEmitter, forwardRef, HostListener, Renderer2, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';

@Component({
  // host: {
  //   'tabIndex': '0',
  //   'role': 'checkbox'
  // },
  selector: 'toggle-switch',
  styleUrls: [
    './toggle-switch.component.scss'
  ],
  template: `
    <label class="switch" [class.disabled]="disabled">
      <div class="toggle-bar">
        <input type="checkbox" (change)="toggleChange($event)" [checked]="innerValue" [disabled]="disabled" tabIndex="0" aria-checked="false">
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
  @Input() color: ThemePalette;
  @Output() change: EventEmitter<any>;

  innerValue: boolean;
  disabled: boolean;
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

  constructor(private renderer: Renderer2, private el: ElementRef) {
    if (this.color) this.renderer.addClass(el.nativeElement, `is-${this.color}`);
  }

  toggleChange(event) {
    this.innerValue = event.target.checked;
    this.onTouch();
    this.onChange(this.innerValue);
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
    this.disabled = isDisabled;
  }
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    if (event.keyCode == ENTER) {
      this.innerValue = !this.innerValue;
      this.onTouch();
      this.onChange(this.value);
    }
  }
}

export enum ThemePalette {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  warning = 'warning',
  info = 'info',
  danger = 'danger',
  light = 'light',
  dark = 'dark'
}