import { Component, OnInit } from '@angular/core';
import { TabChangeEvent } from 'src/app/ngx-bulma/tabs/tabs.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  genderCtrl = new FormControl(null);

  public selectedDestination: string;
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

  form: FormGroup;

  public items = Array.from(Array(10000), (x, i) => {
    return { id: i, name: `Ejemplo ${i}` };
  });

  constructor(private title: Title, private fb: FormBuilder) {
    title.setTitle('Chewbacca-UI | Free, open source and angular components library');
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      active: [false],
      gender: ['male']
    });
    this.genderCtrl.valueChanges.subscribe(value => console.log(value));
  }

  tabChange(event: TabChangeEvent) {

  }

  changeOption(event) {

  }

  onClickItem() {
    //alert('item clicked!')
  }

}
