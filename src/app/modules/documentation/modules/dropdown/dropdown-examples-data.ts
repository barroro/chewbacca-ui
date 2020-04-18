import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';
import { DropdownBasicExampleComponent } from './components/dropdown-basic-example/dropdown-basic-example.component';
import { DropdownWithIconsExampleComponent } from './components/dropdown-with-icons-example/dropdown-with-icons-example.component';


export const basicExample: DocExample = {
  title: 'Basic example',
  html: `
  <chew-dropdown>
    <button chew-button color="dark" [chewDropdownTrigger]="dropdownMenu">Test</button>
    <chew-dropdown-menu #dropdownMenu>
      <a chew-dropdown-item (click)="onClickItem()">
        Option 1
      </a>
      <a chew-dropdown-item (click)="onClickItem()">
        Option 2
      </a>
      <hr class="dropdown-divider">
      <a chew-dropdown-item (click)="onClickItem()">
        With a divider
      </a>
    </chew-dropdown-menu>
  </chew-dropdown>
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
  scss: '/** No CSS for this example */',
  component: DropdownBasicExampleComponent
};

export const dropdownWithIconsExample: DocExample = {
  title: 'Dropdown with icons',
  html: `
  <chew-dropdown>
    <button chew-button color="dark" [chewDropdownTrigger]="dropdownMenu">Test</button>
    <chew-dropdown-menu #dropdownMenu>
      <a chew-dropdown-item (click)="onClickItem()">
        Option 1
      </a>
      <a chew-dropdown-item (click)="onClickItem()">
        Option 2
      </a>
      <hr class="dropdown-divider">
      <a chew-dropdown-item (click)="onClickItem()">
        With a divider
      </a>
    </chew-dropdown-menu>
  </chew-dropdown>
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
  scss: '/** No CSS for this example */',
  component: DropdownWithIconsExampleComponent
};

export const dropdownExamples: Array<DocExample> = [
  basicExample,
  dropdownWithIconsExample
];