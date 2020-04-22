import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TabChangeEvent } from 'src/app/chewbacca-ui/tabs/tabs.component';
import { ChewNotificationService } from 'src/app/chewbacca-ui/chew-notification/chew-notification.service';

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

  code = `
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
  `;

  codeT = `
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { ChewDropdownModule } from './chew-dropdown/chew-dropdown.module';
  
    @NgModule({
      imports: [
        ChewDropdownModule,
      ],
    })
    export class AppModule { }
  `;

  form: FormGroup;

  public items = Array.from(Array(10000), (x, i) => {
    return { id: i, name: `Ejemplo ${i}` };
  });

  constructor(private title: Title, private fb: FormBuilder, private notificationService: ChewNotificationService) {
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

  private count = 1;
  showNotification() {
    this.notificationService.show({
      text: `Chew notification message with large content inside ${this.count}`,
      type: 'success',
    });
    // this.notificationService.showFromComponent(PizzaPartyComponent, {
    //   text: `Chew notification message with large content inside ${this.count}`,
    //   type: 'success',
    // });
    this.count += 1;
  }

  onClickItem() { }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `
    <div class="notification">
      Pizza party!!! 🍕
    </div>
  `,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent { }

