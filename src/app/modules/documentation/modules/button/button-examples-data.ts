import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';
import { ButtonVarietiesExampleComponent } from './components/button-varieties-example/button-varieties-example.component';
import { ButtonBasicExampleComponent } from './components/button-basic-example/button-basic-example.component';


export const basicExample: DocExample = {
  title: 'Basic example',
  html: `
  <h3 class="subtitle">Basic Buttons</h3>
  <div class="example-button-row">
    <button chew-button>Basic</button>
    <button chew-button color="primary">Primary</button>
    <button chew-button color="dark">Warn</button>
    <button chew-button color="success">Primary</button>
    <button chew-button color="warning">Accent</button>
    <button chew-button color="danger">Warn</button>
    <button chew-button color="info">Info</button>
    <button chew-button disabled>Disabled</button>
    <a chew-button routerLink=".">Link</a>
  </div>
  <h3 class="subtitle">Rounded Buttons</h3>
  <div class="example-button-row">
    <button chew-button-rounded>Basic</button>
    <button chew-button-rounded color="primary">Primary</button>
    <button chew-button-rounded color="dark">Warn</button>
    <button chew-button-rounded color="success">Primary</button>
    <button chew-button-rounded color="warning">Accent</button>
    <button chew-button-rounded color="danger">Warn</button>
    <button chew-button-rounded color="info">Info</button>
    <button chew-button-rounded disabled>Disabled</button>
    <a chew-button-rounded routerLink=".">Link</a>
  </div>
  <h3 class="subtitle">Outlined Buttons</h3>
  <div class="example-button-row">
    <button chew-button-outlined>Basic</button>
    <button chew-button-outlined color="primary">Primary</button>
    <button chew-button-outlined color="dark">Warn</button>
    <button chew-button-outlined color="success">Primary</button>
    <button chew-button-outlined color="warning">Accent</button>
    <button chew-button-outlined color="danger">Warn</button>
    <button chew-button-outlined color="info">Info</button>
    <button chew-button-outlined disabled>Disabled</button>
    <a chew-button-outlined routerLink=".">Link</a>
  </div>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-button-basic-example',
    templateUrl: './button-basic-example.component.html',
    styleUrls: ['./button-basic-example.component.scss']
  })
  export class ButtonBasicExampleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
  `,
  scss: '/** No CSS for this example */',
  component: ButtonBasicExampleComponent
};

export const buttonsVarietiesExample: DocExample = {
  title: 'Buttons Varieties',
  html: `
  <h3 class="subtitle">Basic Buttons</h3>
  <div class="example-button-row">
    <button chew-button>Basic</button>
    <button chew-button color="primary">Primary</button>
    <button chew-button color="dark">Warn</button>
    <button chew-button color="success">Primary</button>
    <button chew-button color="warning">Accent</button>
    <button chew-button color="danger">Warn</button>
    <button chew-button color="info">Info</button>
    <button chew-button disabled>Disabled</button>
    <a chew-button routerLink=".">Link</a>
  </div>
  <h3 class="subtitle">Rounded Buttons</h3>
  <div class="example-button-row">
    <button chew-button-rounded>Basic</button>
    <button chew-button-rounded color="primary">Primary</button>
    <button chew-button-rounded color="dark">Warn</button>
    <button chew-button-rounded color="success">Primary</button>
    <button chew-button-rounded color="warning">Accent</button>
    <button chew-button-rounded color="danger">Warn</button>
    <button chew-button-rounded color="info">Info</button>
    <button chew-button-rounded disabled>Disabled</button>
    <a chew-button-rounded routerLink=".">Link</a>
  </div>
  <h3 class="subtitle">Outlined Buttons</h3>
  <div class="example-button-row">
    <button chew-button-outlined>Basic</button>
    <button chew-button-outlined color="primary">Primary</button>
    <button chew-button-outlined color="dark">Warn</button>
    <button chew-button-outlined color="success">Primary</button>
    <button chew-button-outlined color="warning">Accent</button>
    <button chew-button-outlined color="danger">Warn</button>
    <button chew-button-outlined color="info">Info</button>
    <button chew-button-outlined disabled>Disabled</button>
    <a chew-button-outlined routerLink=".">Link</a>
  </div>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-button-varieties-example',
    templateUrl: './button-varieties-example.component.html',
    styleUrls: ['./button-varieties-example.component.scss']
  })
  export class ButtonVarietiesExampleComponent implements OnInit {
  
    constructor() { }
  
    ngOnInit() {
    }
  
  }
  `,
  scss: `
  .example-button-row button{
    margin-right: 8px;
  }
  `,
  component: ButtonVarietiesExampleComponent
};

export const buttonExamples: Array<DocExample> = [
  basicExample,
  buttonsVarietiesExample
];