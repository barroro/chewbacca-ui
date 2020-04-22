import { Component, OnInit } from '@angular/core';
import { radioBasicExample, radioConfExample, radioExamples } from '../../radio-button-examples-data';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss']
})
export class OverviewComponentComponent implements OnInit {

  radioExamples = radioExamples;

  radioBasicExample = radioBasicExample;

  constructor() { }

  ngOnInit() {
  }

}
