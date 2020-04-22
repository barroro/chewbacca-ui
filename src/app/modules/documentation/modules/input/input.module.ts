import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';
import { InputBasicExampleComponent } from './components/input-basic-example/input-basic-example.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    OverviewComponentComponent,
    InputBasicExampleComponent
  ],
  imports: [
    CommonModule,
    InputRoutingModule,
    SharedModule
  ],
  entryComponents: [
    InputBasicExampleComponent
  ]
})
export class InputModule { }
