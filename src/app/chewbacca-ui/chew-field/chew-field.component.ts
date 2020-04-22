import { Component, ContentChildren, QueryList, Input } from '@angular/core';

@Component({
  selector: 'chew-field',
  template: `
    <div class="field">
      <div class="control">
        <ng-content></ng-content>
      </div> 
    </div>
  `,
})
export class ChewFieldComponent {

}