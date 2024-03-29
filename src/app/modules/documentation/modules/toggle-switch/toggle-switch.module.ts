import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToggleSwitchRoutingModule } from './toggle-switch-routing.module';
import { OverviewComponentsComponent } from './components/overview-components/overview-components.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ToggleSwitchBasicExampleComponent } from './components/toggle-switch-basic-example/toggle-switch-basic-example.component';
import { ToggleSwitchConfExampleComponent } from './components/toggle-switch-conf-example/toggle-switch-conf-example.component';

@NgModule({
  declarations: [
    OverviewComponentsComponent,
    ToggleSwitchBasicExampleComponent,
    ToggleSwitchConfExampleComponent
  ],
  imports: [
    CommonModule,
    ToggleSwitchRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ToggleSwitchBasicExampleComponent,
    ToggleSwitchConfExampleComponent
  ]
})
export class ToggleSwitchModule { }
