import { Component, OnInit } from '@angular/core';
import { toggleSwitchBasicExample, toggleSwitchExamples } from '../../toggle-switch-examples-data';

@Component({
  selector: 'app-overview-components',
  templateUrl: './overview-components.component.html',
  styleUrls: ['./overview-components.component.scss']
})
export class OverviewComponentsComponent implements OnInit {

  toggleSwitchExamples = toggleSwitchExamples;

  toggleSwitchBasicExample = toggleSwitchBasicExample;

  constructor() { }

  ngOnInit() {
  }

}
