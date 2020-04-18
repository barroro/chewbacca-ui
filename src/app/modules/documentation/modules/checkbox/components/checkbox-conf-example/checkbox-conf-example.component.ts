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
