import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { CheckboxComponent } from './checkbox';
import { ChewSelectModule } from './chew-select/chew-select.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Scroll } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ToggleSwitchModule } from './toggle-switch/toggle-switch.module';
import { ChewRadioButtonModule } from './chew-radio-button/chew-radio-button.module';
import { ChewFieldModule } from './chew-field/chew-field.module';
import { ChewButtonModule } from './chew-button/chew-button.module';
import { ChewDropdownModule } from './chew-dropdown/chew-dropdown.module';

@NgModule({
  declarations: [
    NavbarComponent,
    TabsComponent,
    TabComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    ChewButtonModule,
    ChewSelectModule,
    ToggleSwitchModule,
    ChewRadioButtonModule,
    ChewFieldModule,
    ChewDropdownModule,
    ScrollingModule,
    OverlayModule,
    PortalModule
  ],
  exports: [
    NavbarComponent,
    TabsComponent,
    TabComponent,
    CheckboxComponent,
    ChewButtonModule,
    ChewSelectModule,
    ToggleSwitchModule,
    ChewRadioButtonModule,
    ChewFieldModule,
    ChewDropdownModule
  ]
})
export class ChewbaccaUIModule { }
