import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectRoutingModule } from './select-routing.module';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';
import { SelectBasicExampleComponent } from './components/select-basic-example/select-basic-example.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [
    OverviewComponentComponent,
    SelectBasicExampleComponent
  ],
  imports: [
    CommonModule,
    SelectRoutingModule,
    SharedModule
  ]
})
export class SelectModule { }
