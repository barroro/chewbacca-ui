import { Directive, Input, HostBinding, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@Directive({
  selector: '[button]'
})
export class ButtonDirective implements OnInit {

  @Input() color: string;
  @Input() size: string;
  @Input() class: string;
  @Input() dropdownTrigger: DropdownMenuComponent;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    renderer.addClass(el.nativeElement, 'button');
  }

  ngOnInit(): void {
    if (this.color) this.renderer.addClass(this.el.nativeElement, `is-${this.color}`);
    if (this.size) this.renderer.addClass(this.el.nativeElement, `is-${this.size}`);
    if (this.class) this.renderer.addClass(this.el.nativeElement, this.class);
  }

  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.dropdownTrigger) this.dropdownTrigger.toggle();
  }

}



