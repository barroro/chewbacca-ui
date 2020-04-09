import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[button-outlined]'
})
export class ButtonOutlinedDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'is-outlined');
  }

}
