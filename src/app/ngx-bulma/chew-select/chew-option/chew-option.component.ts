import { Component, OnInit, Input, Output, EventEmitter, ElementRef, HostBinding } from '@angular/core';
import { FocusableOption, Highlightable } from '@angular/cdk/a11y';

@Component({
  host: {
    'tabindex': '-1'
  },
  selector: 'chew-option',
  template: `
    <a class="dropdown-item chew-option" (click)="onClickOption($event)">
      <ng-content></ng-content>
    </a>
  `,
  styles: [`
    .chew-option{
      font-size: 1rem;
    }
    .dropdown-item.chew-option:focus{
      background-color: gray;
    }
    :host.is-active .chew-option {
      background: lightblue;
      color: #fff;
   }
    :host(:focus).chew-option{
      background-color: black;
    }
  `]
})
export class ChewOptionComponent implements FocusableOption {

  @Input() value: any;
  @Input() disabled: boolean = false;
  @Output('click') click = new EventEmitter<any>();

  constructor(private element: ElementRef) { }

  onClickOption(event) {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(this.value);
  }

  private _isActive = false;

  // @HostBinding('class.is-active') get isActive() {
  //   return this._isActive;
  // };

  // setActiveStyles() {
  //   this._isActive = true;
  // };

  // setInactiveStyles() {
  //   this._isActive = false;
  // }

  getLabel() {
    return this.value;
  }

  focus() {
    this.element.nativeElement.focus();
  }
}
