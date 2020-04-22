import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'chew-tooltip',
  styles: [
    `
    :host {
      display: block
    }
    
    div {
      background-color: #292929;
      color: white;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
    }
    `
  ],
  template: `
    <div @tooltip>{{ text }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ChewTooltipComponent {

  @Input() text = '';
}