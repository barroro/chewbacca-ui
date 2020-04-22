import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';
import { CheckboxBasicExampleComponent } from './components/checkbox-basic-example/checkbox-basic-example.component';
import { CheckboxConfExampleComponent } from './components/checkbox-conf-example/checkbox-conf-example.component';


export const checkboxBasicExample: DocExample = {
  title: 'Basic example',
  html: `
  <chew-checkbox></chew-checkbox>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-checkbox-basic-example',
    templateUrl: './checkbox-basic-example.component.html',
    styleUrls: ['./checkbox-basic-example.component.scss']
  })
  export class CheckboxBasicExampleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
  `,
  scss: '/** No CSS for this example */',
  component: CheckboxBasicExampleComponent
};

export const checkboxConfExample: DocExample = {
  title: 'Checkbox configuration',
  html: `
  <h3 class="title">Checkbox configuration</h3>
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
      <chew-checkbox [(ngModel)]="checked" [disabled]="disabled" [color]="color">Check me!</chew-checkbox>
    </div>
  </div>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';
  import { ThemePalette } from 'src/app/ngx-bulma/toggle-switch/toggle-switch.component';

  @Component({
    selector: 'app-checkbox-conf-example',
    templateUrl: './checkbox-conf-example.component.html',
    styleUrls: ['./checkbox-conf-example.component.scss']
  })
  export class CheckboxConfExampleComponent implements OnInit {

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
  component: CheckboxConfExampleComponent
};

export const checkboxExamples: Array<DocExample> = [
  checkboxBasicExample,
  checkboxConfExample
];