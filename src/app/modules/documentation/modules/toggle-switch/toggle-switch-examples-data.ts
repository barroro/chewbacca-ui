import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';
import { ToggleSwitchBasicExampleComponent } from './components/toggle-switch-basic-example/toggle-switch-basic-example.component';
import { ToggleSwitchConfExampleComponent } from './components/toggle-switch-conf-example/toggle-switch-conf-example.component';


export const toggleSwitchBasicExample: DocExample = {
  title: 'Basic example',
  html: `
  <chew-toggle-switch>Click me to slide!</chew-toggle-switch>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-toggle-switch-basic-example',
    templateUrl: './toggle-switch-basic-example.component.html',
    styleUrls: ['./toggle-switch-basic-example.component.scss']
  })
  export class ToggleSwitchBasicExampleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
  `,
  scss: '/** No CSS for this example */',
  component: ToggleSwitchBasicExampleComponent
};

export const toggleSwitchConfExample: DocExample = {
  title: 'Toggle switch configuration',
  html: `
  <h3 class="subtitle">Toggle switch configuration</h3>
  <div class="columns">
    <div class="column">
      Color:
      <chew-radio-group [(ngModel)]="color">
        <chew-radio-button value="primary" checked="true">Primary</chew-radio-button>
        <chew-radio-button value="secondary">Secondary</chew-radio-button>
        <chew-radio-button value="dark">Dark</chew-radio-button>
        <chew-radio-button value="success">Success</chew-radio-button>
        <chew-radio-button value="warning">Warning</chew-radio-button>
      </chew-radio-group>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <chew-checkbox [(ngModel)]="checked">Checked</chew-checkbox>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <chew-checkbox [(ngModel)]="disabled">Disabled</chew-checkbox>
    </div>
  </div>
  <h3 class="subtitle">Result:</h3>
  <div class="columns">
    <div class="column">
      <chew-toggle-switch [(ngModel)]="checked" [disabled]="disabled" [color]="color">Click me to slide!</chew-toggle-switch>
    </div>
  </div>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';
  import { ThemePalette } from 'src/app/ngx-bulma/toggle-switch/toggle-switch.component';

  @Component({
    selector: 'app-toggle-switch-conf-example',
    templateUrl: './toggle-switch-conf-example.component.html',
    styleUrls: ['./toggle-switch-conf-example.component.scss']
  })
  export class ToggleSwitchConfExampleComponent implements OnInit {

    disabled: boolean = false;
    checked: boolean = false;
    color: ThemePalette;

    constructor() { }

    ngOnInit() {
    }

  }
  `,
  scss: `
  /** No CSS for this example */
  `,
  component: ToggleSwitchConfExampleComponent
};

export const toggleSwitchExamples: Array<DocExample> = [
  toggleSwitchBasicExample,
  toggleSwitchConfExample
];