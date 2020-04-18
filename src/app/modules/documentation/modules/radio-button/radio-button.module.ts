import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonRoutingModule } from './radio-button-routing.module';
import { RadioButtonBasicExampleComponent } from './components/radio-button-basic-example/radio-button-basic-example.component';
import { RadioButtonConfExampleComponent } from './components/radio-button-conf-example/radio-button-conf-example.component';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    RadioButtonBasicExampleComponent,
    RadioButtonConfExampleComponent,
    OverviewComponentComponent
  ],
  imports: [
    CommonModule,
    RadioButtonRoutingModule,
    SharedModule
  ]
})
export class RadioButtonModule { }
