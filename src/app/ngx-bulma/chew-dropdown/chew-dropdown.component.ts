import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'chew-dropdown',
  template: `
    <div class="dropdown {{class}}">
      <ng-content></ng-content>
    </div>
  `,
})
export class ChewDropdownComponent implements OnInit {

  @Input() class: string;

  constructor(private el: ElementRef) {
    document.addEventListener('click', this.clickContainer, { passive: true });
  }

  ngOnInit() {
  }

  clickContainer() {

  }

}
