import { Component, OnInit } from '@angular/core';
import { selectBasicExample } from '../../select-examples-data';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss']
})
export class OverviewComponentComponent implements OnInit {

  selectBasicExample = selectBasicExample;

  constructor() { }

  ngOnInit() {
  }

}
