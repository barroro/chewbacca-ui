import { Component, Input, Output, EventEmitter, forwardRef, ContentChildren, QueryList } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChewRadioButtonComponent } from './chew-radio-button.component';
import { Subject } from 'rxjs';

@Component({
  host: {
    'role': 'radiogroup'
  },
  selector: 'chew-radio-group',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChewRadioGroupComponent),
      multi: true
    }
  ]
})
export class ChewRadioGroupComponent implements ControlValueAccessor {

  @ContentChildren(ChewRadioButtonComponent) buttons: QueryList<ChewRadioButtonComponent>;

  @Input() value: any;
  @Input() disabled: boolean;

  onChange = (_: any) => { }
  onTouch = () => { }

  stateChanges = new Subject<void>();

  ngAfterViewInit() {
    this.buttons.toArray().forEach(b => {
      if (this.value == b.value)
        b.checked = true;
      b.change.subscribe(value => {
        this.value = value;
        this.onChange(value);
        this.onTouch();
      });
    })
  }
  writeValue(value: any): void {
    if (value) {
      this.value = value;
    } else {
      this.value = '';
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
}