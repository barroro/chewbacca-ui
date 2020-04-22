import { Component, OnInit } from '@angular/core';
import { checkboxExamples, checkboxBasicExample } from '../../checkbox-examples-data';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss']
})
export class OverviewComponentComponent implements OnInit {

  checkboxBasicExample = checkboxBasicExample;
  checkboxExamples = checkboxExamples;

  constructor() { }

  ngOnInit() {
  }

}
