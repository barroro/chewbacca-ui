import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';
import { ButtonBasicExampleComponent } from './components/button-basic-example/button-basic-example.component';
import { ButtonVarietiesExampleComponent } from './components/button-varieties-example/button-varieties-example.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    OverviewComponentComponent,
    ButtonBasicExampleComponent,
    ButtonVarietiesExampleComponent
  ],
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ButtonBasicExampleComponent,
    ButtonVarietiesExampleComponent
  ]
})
export class ButtonModule { }
