import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';
import { RadioButtonBasicExampleComponent } from './components/radio-button-basic-example/radio-button-basic-example.component';
import { RadioButtonConfExampleComponent } from './components/radio-button-conf-example/radio-button-conf-example.component';

export const radioBasicExample: DocExample = {
  title: 'Basic example',
  html: `
  <chew-radio-group>
    <chew-radio-button value="1" checked="true">Option 1</chew-radio-button>
    <chew-radio-button value="2">Option 2</chew-radio-button>
  </chew-radio-group>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-radio-button-basic-example',
    templateUrl: './radio-button-basic-example.component.html',
    styleUrls: ['./radio-button-basic-example.component.scss']
  })
  export class RadioButtonBasicExampleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
  `,
  scss: '/** No CSS for this example */',
  component: RadioButtonBasicExampleComponent
};

export const radioConfExample: DocExample = {
  title: 'Radio button configuration',
  html: `
  <h3 class="subtitle">Radio button configuration</h3>
  <chew-radio-group [(ngModel)]="color">
    <chew-radio-button value="red" checked="true">Red</chew-radio-button>
    <chew-radio-button value="blue">Blue</chew-radio-button>
    <chew-radio-button value="green">Green</chew-radio-button>
    <chew-radio-button value="yellow">Yellow</chew-radio-button>
  </chew-radio-group>
  <div class="content">
    Color selected: {{ color }}
  </div>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-radio-button-conf-example',
    templateUrl: './radio-button-conf-example.component.html',
    styleUrls: ['./radio-button-conf-example.component.scss']
  })
  export class RadioButtonConfExampleComponent implements OnInit {

    color: string = 'red';

    constructor() { }

    ngOnInit() {
    }

  }
  `,
  scss: `
  .radio-group-example{
    display: flex;
    flex-direction: column;
    chew-radio-button{
      margin-bottom: 5px;
    }
  }
  `,
  component: RadioButtonConfExampleComponent
};

export const radioExamples: Array<DocExample> = [
  radioBasicExample,
  radioConfExample
];