import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-doc-example-viewer',
  templateUrl: './doc-example-viewer.component.html',
  styleUrls: ['./doc-example-viewer.component.scss']
})
export class DocExampleViewerComponent implements OnInit {

  @Input() title: string;
  @ContentChild('templateCode', { static: false }) templateCodeRef: TemplateRef<any>;
  @ContentChild('templateContent', { static: false }) templateContentRef: TemplateRef<any>;

  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showCode() {
    this.opened = !this.opened;
  }

}


