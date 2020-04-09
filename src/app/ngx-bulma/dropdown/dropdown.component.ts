import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() class: string;

  constructor(private el: ElementRef) {
    document.addEventListener('click', this.clickContainer, { passive: true });
  }

  ngOnInit() {
  }

  clickContainer() {

  }

}
