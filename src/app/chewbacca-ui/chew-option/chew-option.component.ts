import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FocusableOption, Highlightable } from '@angular/cdk/a11y';
import { fromEvent, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  host: {
    'tabindex': '0',
    'role': 'option',
    'class': 'chew-option'
  },
  styles: [
    `
      :host:focus{
        outline: none;
      }
    `
  ],
  selector: 'chew-option',
  template: `
    <span>
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChewOptionComponent implements FocusableOption {

  @Input() value: any;
  click$: Observable<string>;

  selected: boolean = false;

  constructor(private host: ElementRef) {
  }

  ngOnInit() {
    this.click$ = fromEvent(this.element, 'click').pipe(mapTo(this.value));
  }

  get element() { return this.host.nativeElement; }

  get content() { return this.host.nativeElement.innerText }

  // @HostBinding('class.is-active') get isActive() {
  //   return this._isActive;
  // };

  // setActiveStyles() {
  //   this._isActive = true;
  // };

  // setInactiveStyles() {
  //   this._isActive = false;
  // }

  @HostBinding('class.selected') get isSelected() {
    return this.selected;
  };

  setSelectedClass() {
    setTimeout(() => {
      this.selected = true;
    });
  }

  setDeselectClass() {
    this.selected = false;
  }

  getLabel() {
    return this.value;
  }

  focus() {
    this.element.nativeElement.focus();
  }
}
