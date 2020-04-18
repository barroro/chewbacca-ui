import { Component, OnInit, ElementRef, ContentChildren, Input } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'doc-code',
  templateUrl: './doc-code.component.html',
  styleUrls: ['./doc-code.component.scss']
})
export class DocCodeComponent implements OnInit {

  @Input() language: string = 'html';
  @Input() code: string;
  messageTooltip: string = 'Copy';

  valueHighlight: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.valueHighlight = hljs.highlight(this.language, this.code).value
  }

  copy() {
    const el = document.createElement('textarea');
    el.value = this.code;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.messageTooltip = 'Code copied!';
  }

}


