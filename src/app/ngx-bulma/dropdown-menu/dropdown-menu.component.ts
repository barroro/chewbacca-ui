import { Component, OnInit, Input, Renderer2, ElementRef, HostListener, ContentChildren, QueryList } from '@angular/core';
import { DropdownItemDirective } from '../dropdown-item.directive';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {

  @Input() class: string;
  @Input() open: boolean = false;
  opened: boolean = false;
  @ContentChildren(DropdownItemDirective) contentChildren !: QueryList<DropdownItemDirective>;

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
