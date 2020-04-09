import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown-item]'
})
export class DropdownItemDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'dropdown-item');
  }

}
