import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { DocExample } from '../../interfaces/doc-example';

@Component({
  selector: 'app-doc-example-viewer',
  templateUrl: './doc-example-viewer.component.html',
  styleUrls: ['./doc-example-viewer.component.scss']
})
export class DocExampleViewerComponent implements OnInit {

  @Input() docExample: DocExample;

  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showCode() {
    this.opened = !this.opened;
  }
}


