import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[chew-dropdown-item]'
})
export class ChewDropdownItemDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'dropdown-item');
  }

}
