import { Component, OnInit, Input } from '@angular/core';
import { DocExample } from '../../interfaces/doc-example';

@Component({
  selector: 'doc-example-viewer-test',
  templateUrl: './doc-example-viewer-test.component.html',
  styleUrls: ['./doc-example-viewer-test.component.scss']
})
export class DocExampleViewerTestComponent implements OnInit {

  @Input() docExample: DocExample;

  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showCode() {
    this.opened = !this.opened;
  }

}
