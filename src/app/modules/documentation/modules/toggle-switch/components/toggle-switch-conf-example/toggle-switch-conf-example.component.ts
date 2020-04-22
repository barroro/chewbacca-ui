import { Component, OnInit } from '@angular/core';
import { ThemePalette } from 'src/app/chewbacca-ui/chew-toggle-switch/toggle-switch.component';

@Component({
  selector: 'app-toggle-switch-conf-example',
  templateUrl: './toggle-switch-conf-example.component.html',
  styleUrls: ['./toggle-switch-conf-example.component.scss']
})
export class ToggleSwitchConfExampleComponent implements OnInit {

  disabled: boolean = false;
  checked: boolean = false;
  color: string = 'dark';

  constructor() { }

  ngOnInit() {
  }

}
