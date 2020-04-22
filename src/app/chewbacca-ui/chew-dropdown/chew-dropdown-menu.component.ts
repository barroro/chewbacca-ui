import { Component, OnInit, Input, Renderer2, ElementRef, HostListener, ContentChildren, QueryList } from '@angular/core';
import { ChewDropdownItemDirective } from './chew-dropdown-item.directive';

@Component({
  selector: 'chew-dropdown-menu',
  template: `
    <div class="dropdown-menu">
      <div class="dropdown-content {{class}}">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ChewDropdownMenuComponent implements OnInit {

  @Input() class: string;
  @Input() open: boolean = false;
  opened: boolean = false;
  @ContentChildren(ChewDropdownItemDirective) contentChildren !: QueryList<ChewDropdownItemDirective>;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {

  }

  toggle() {
    this.opened = !this.opened;
    if (this.opened) {
      this.renderer.addClass(this.el.nativeElement.querySelector('div'), 'is-active');
    } else {
      this.renderer.removeClass(this.el.nativeElement.querySelector('div'), 'is-active');
    }
  }

  closePanel() {
    this.opened = false;
    this.renderer.removeClass(this.el.nativeElement.querySelector('div'), 'is-active');
  }

  openPanel() {
    this.opened = true;
    this.renderer.addClass(this.el.nativeElement.querySelector('div'), 'is-active');
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const isDropdownItem = targetElement.classList.contains('dropdown-item');
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if ((!clickedInside || isDropdownItem) && this.opened) {
      this.closePanel();
    }
  }

}
