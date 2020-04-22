import { DocExample } from 'src/app/modules/shared/interfaces/doc-example';
import { InputBasicExampleComponent } from './components/input-basic-example/input-basic-example.component';

export const inputBasicExample: DocExample = {
  title: 'Basic example',
  html: `
  <form class="example-form">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Name">
      </div>
    </div>
    <div class="field">
      <label class="label">Comment</label>
      <div class="control">
        <textarea class="textarea" type="text" placeholder="Comment"></textarea>
      </div>
    </div>
  </form>
  `,
  typescript: `
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-input-basic-example',
    templateUrl: './input-basic-example.component.html',
    styleUrls: ['./input-basic-example.component.scss']
  })
  export class InputBasicExampleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

  }
  `,
  scss: '/** No CSS for this example */',
  component: InputBasicExampleComponent
};

// export const dropdownWithIconsExample: DocExample = {
//   title: 'Dropdown with icons',
//   html: `
//   <chew-dropdown>
//     <button chew-button color="dark" [chewDropdownTrigger]="dropdownMenu">Test</button>
//     <chew-dropdown-menu #dropdownMenu>
//       <a chew-dropdown-item (click)="onClickItem()">
//         Option 1
//       </a>
//       <a chew-dropdown-item (click)="onClickItem()">
//         Option 2
//       </a>
//       <hr class="dropdown-divider">
//       <a chew-dropdown-item (click)="onClickItem()">
//         With a divider
//       </a>
//     </chew-dropdown-menu>
//   </chew-dropdown>
//   `,
//   typescript: `
//   import { Component, OnInit } from '@angular/core';
//   import { ThemePalette } from 'src/app/ngx-bulma/toggle-switch/toggle-switch.component';

//   @Component({
//     selector: 'app-checkbox-conf-example',
//     templateUrl: './checkbox-conf-example.component.html',
//     styleUrls: ['./checkbox-conf-example.component.scss']
//   })
//   export class CheckboxConfExampleComponent implements OnInit {

//     disabled: boolean = false;
//     checked: boolean = false;
//     color: ThemePalette;

//     constructor() { }

//     ngOnInit() {
//     }

//   }
//   `,
//   scss: '/** No CSS for this example */',
//   component: DropdownWithIconsExampleComponent
// };

export const inputExamples: Array<DocExample> = [
  inputBasicExample,
];