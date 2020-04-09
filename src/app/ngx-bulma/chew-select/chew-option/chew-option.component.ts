import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
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
  `]
})
export class ChewOptionComponent {

  @Input() value: any;
  @Input() disabled: boolean = false;
  @Output('click') click = new EventEmitter<any>();

  constructor() { }

  onClickOption(event) {
    event.stopPropagation();
    event.preventDefault();
    this.click.emit(this.value);
  }
}
