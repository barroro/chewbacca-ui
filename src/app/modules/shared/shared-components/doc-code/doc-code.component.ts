import { Component, OnInit, ElementRef, ContentChildren } from '@angular/core';

@Component({
  selector: 'doc-code',
  templateUrl: './doc-code.component.html',
  styleUrls: ['./doc-code.component.scss']
})
export class DocCodeComponent implements OnInit {

  @ContentChildren('code') codeItems: Array<ElementRef>;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log(this.codeItems);
    console.log(this.el.nativeElement.getElementsByTagName('code'));
  }

  copyContent() {
    let content = '';

  }

}
