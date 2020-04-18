import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
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
import { ChewCheckboxModule } from './checkbox/chew-checkbox.module';
import { ChewTooltipModule } from './chew-tooltip/chew-tooltip.module';

@NgModule({
  declarations: [
    NavbarComponent,
    TabsComponent,
    TabComponent,
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
    PortalModule,
    ChewCheckboxModule,
    ChewTooltipModule
  ],
  exports: [
    NavbarComponent,
    TabsComponent,
    TabComponent,
    ChewCheckboxModule,
    ChewButtonModule,
    ChewSelectModule,
    ToggleSwitchModule,
    ChewRadioButtonModule,
    ChewFieldModule,
    ChewDropdownModule,
    ChewTooltipModule
  ]
})
export class ChewbaccaUIModule { }
