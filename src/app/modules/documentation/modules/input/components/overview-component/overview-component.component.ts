import { Component, OnInit } from '@angular/core';
import { inputBasicExample, inputExamples } from '../../input-examples-data';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss']
})
export class OverviewComponentComponent implements OnInit {

  inputBasicExample = inputBasicExample;

  inputExamples = inputExamples;

  constructor() { }

  ngOnInit() {
  }

}
