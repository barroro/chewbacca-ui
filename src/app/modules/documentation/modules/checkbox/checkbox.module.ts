import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxRoutingModule } from './checkbox-routing.module';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';
import { CheckboxBasicExampleComponent } from './components/checkbox-basic-example/checkbox-basic-example.component';
import { CheckboxConfExampleComponent } from './components/checkbox-conf-example/checkbox-conf-example.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    OverviewComponentComponent,
    CheckboxBasicExampleComponent,
    CheckboxConfExampleComponent
  ],
  imports: [
    CommonModule,
    CheckboxRoutingModule,
    SharedModule
  ],
  entryComponents: [
    CheckboxBasicExampleComponent,
    CheckboxConfExampleComponent
  ]
})
export class CheckboxModule { }
