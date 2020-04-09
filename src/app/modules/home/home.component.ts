import { Component, OnInit } from '@angular/core';
import { TabChangeEvent } from 'src/app/ngx-bulma/tabs/tabs.component';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checkboxCtrl = new FormControl(true);
  checkboxCtrl2 = new FormControl(true);
  checkboxCtrl3 = new FormControl(true);

  // public items = [
  //   { id: 1, name: 'Ejemplo 1' },
  //   { id: 2, name: 'Ejemplo 2' },
  //   { id: 3, name: 'Ejemplo 3' },
  //   { id: 1, name: 'Ejemplo 1' },
  //   { id: 2, name: 'Ejemplo 2' },
  //   { id: 3, name: 'Ejemplo 3' },
  //   { id: 1, name: 'Ejemplo 1' },
  //   { id: 2, name: 'Ejemplo 2' },
  //   { id: 3, name: 'Ejemplo 3' },
  //   { id: 1, name: 'Ejemplo 1' },
  //   { id: 2, name: 'Ejemplo 2' },
  //   { id: 3, name: 'Ejemplo 3' }
  // ];

  public items = Array.from(Array(50), (x, i) => {
    return { id: i, name: `Ejemplo ${i}` };
  });

  constructor(private title: Title) {
    title.setTitle('Chewbacca-UI | Free, open source and angular components library');
  }

  ngOnInit() {
    this.checkboxCtrl.valueChanges.subscribe(v => console.log('1: ', v));
    this.checkboxCtrl2.valueChanges.subscribe(v => console.log('2: ', v));
    this.checkboxCtrl3.valueChanges.subscribe(v => console.log('3: ', v));
  }

  tabChange(event: TabChangeEvent) {
    console.log('Current tab selected: ', event.index);
  }

  changeOption(event) {
    console.log(event);
  }

}
