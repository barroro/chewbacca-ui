import { Directive, Renderer2, ElementRef, HostListener, Input } from '@angular/core';
import { ChewDropdownMenuComponent } from './chew-dropdown-menu.component';

@Directive({
  selector: '[chewDropdownTrigger]'
})
export class ChewDropdownTriggerDirective {

  @Input() chewDropdownTrigger: ChewDropdownMenuComponent;

  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (this.chewDropdownTrigger) this.chewDropdownTrigger.toggle();
  }
}
