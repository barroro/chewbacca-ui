import { Component, OnInit } from '@angular/core';
import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';
import { dropdownExamples } from '../../dropdown-examples-data';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss']
})
export class OverviewComponentComponent implements OnInit {

  dropdownExamples: Array<DocExample> = dropdownExamples;

  constructor() { }

  ngOnInit() {
  }

}
