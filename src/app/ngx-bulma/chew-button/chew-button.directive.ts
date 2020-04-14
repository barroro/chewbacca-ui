import { Directive, Input, HostBinding, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';
import { ChewButtonSizes } from './chew-button-sizes';
import { ChewButtonColors } from './chew-button-colors';

@Directive({
  selector: 'button[chew-button], button[chew-button-outlined], button[chew-button-rounded], a[chew-button], a[chew-button-outlined], a[chew-button-rounded]'
})
export class ChewButtonDirective implements OnInit {

  @Input() color: ChewButtonColors;
  @Input() size: ChewButtonSizes;
  @Input() class: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'button');
  }

  ngOnInit(): void {
    if (this.color) this.renderer.addClass(this.el.nativeElement, `is-${this.color}`);
    if (this.size) this.renderer.addClass(this.el.nativeElement, `is-${this.size}`);
    if (this.class) this.renderer.addClass(this.el.nativeElement, this.class);
    if (this.el.nativeElement.hasAttribute('chew-button-outlined')) this.renderer.addClass(this.el.nativeElement, 'is-outlined');
    if (this.el.nativeElement.hasAttribute('chew-button-rounded')) this.renderer.addClass(this.el.nativeElement, 'is-rounded');
  }

}



