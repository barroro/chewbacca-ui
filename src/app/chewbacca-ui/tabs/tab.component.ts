import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  styles: [
    `
    .pane{
      padding: 0;
    }
  `
  ],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input('title') title: string;
  @Input() active = false;
}