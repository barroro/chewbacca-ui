import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-basic-example',
  templateUrl: './select-basic-example.component.html',
  styleUrls: ['./select-basic-example.component.scss']
})
export class SelectBasicExampleComponent implements OnInit {

  public options = Array.from(Array(10), (x, i) => {
    return { value: i, label: `Option ${i}` };
  });
  valueSelected: string = 'admin';
  selectCtrl = new FormControl('admin');

  constructor() { }

  ngOnInit() {
    this.selectCtrl.valueChanges
      .subscribe(v => console.log(v));
  }

  changeOption(event) {
    console.log('Value selected: ', event);
  }

}
