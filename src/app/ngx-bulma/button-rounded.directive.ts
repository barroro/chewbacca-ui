import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[button-rounded]'
})
export class ButtonRoundedDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'is-rounded');
  }

}
