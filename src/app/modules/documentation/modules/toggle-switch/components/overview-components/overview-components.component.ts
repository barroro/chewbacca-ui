import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-components',
  templateUrl: './overview-components.component.html',
  styleUrls: ['./overview-components.component.scss']
})
export class OverviewComponentsComponent implements OnInit {

  codeHtmlConfExample = `
  <h3 class="title">Toggle switch configuration</h3>
  <div class="columns">
    <div class="column">
      Color: 
      <chew-radio-group>
        <chew-radio-button value="male">Primary</chew-radio-button>
        <chew-radio-button value="female" checked="true">Secondary</chew-radio-button>
      </chew-radio-group>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <chew-checkbox>Checked</chew-checkbox>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <chew-checkbox>Disabled</chew-checkbox>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <toggle-switch>Click me to slide!</toggle-switch>
    </div>
  </div>
  `;

  codeTsConfExample = `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-toggle-switch-conf-example',
    templateUrl: './toggle-switch-conf-example.component.html',
    styleUrls: ['./toggle-switch-conf-example.component.scss']
  })
  export class ToggleSwitchConfExampleComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  `;

  constructor() { }

  ngOnInit() {
  }

}
