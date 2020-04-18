import { Component, OnInit } from '@angular/core';
import { buttonExamples } from '../../button-examples-data';
import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss']
})
export class OverviewComponentComponent implements OnInit {

  buttonExamples: Array<DocExample> = buttonExamples;

  constructor() { }

  ngOnInit() {
  }

}
