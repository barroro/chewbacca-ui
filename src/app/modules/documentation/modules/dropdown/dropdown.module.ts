import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';
import { DropdownBasicExampleComponent } from './components/dropdown-basic-example/dropdown-basic-example.component';
import { DropdownWithIconsExampleComponent } from './components/dropdown-with-icons-example/dropdown-with-icons-example.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [OverviewComponentComponent, DropdownBasicExampleComponent, DropdownWithIconsExampleComponent],
  imports: [
    CommonModule,
    DropdownRoutingModule,
    SharedModule
  ],
  entryComponents: [
    DropdownBasicExampleComponent,
    DropdownWithIconsExampleComponent
  ]
})
export class DropdownModule { }
