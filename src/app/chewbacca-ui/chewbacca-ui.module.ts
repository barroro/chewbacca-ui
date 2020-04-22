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
import { ChewRadioButtonModule } from './chew-radio-button/chew-radio-button.module';
import { ChewFieldModule } from './chew-field/chew-field.module';
import { ChewButtonModule } from './chew-button/chew-button.module';
import { ChewDropdownModule } from './chew-dropdown/chew-dropdown.module';
import { ChewCheckboxModule } from './checkbox/chew-checkbox.module';
import { ChewTooltipModule } from './chew-tooltip/chew-tooltip.module';
import { ChewToggleSwitchModule } from './chew-toggle-switch/toggle-switch.module';
import { ChewAutocompleteModule } from './chew-autocomplete/chew-autocomplete.module';
import { ChewNotificationModule } from './chew-notification/chew-notification.module';
import { NotificationConfig } from './chew-notification/chew-notification-config';

export const notificationConfig: NotificationConfig = {
  position: {
    top: 100,
    right: 100,
  },
  animation: {
    fadeOut: 2000,
    fadeIn: 300,
  },
};

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
    ChewAutocompleteModule,
    ChewToggleSwitchModule,
    ChewRadioButtonModule,
    ChewFieldModule,
    ChewDropdownModule,
    ScrollingModule,
    OverlayModule,
    PortalModule,
    ChewCheckboxModule,
    ChewTooltipModule,
    ChewNotificationModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    TabsComponent,
    TabComponent,
    ChewCheckboxModule,
    ChewAutocompleteModule,
    ChewButtonModule,
    ChewSelectModule,
    ChewToggleSwitchModule,
    ChewRadioButtonModule,
    ChewFieldModule,
    ChewDropdownModule,
    ChewTooltipModule,
    ChewNotificationModule
  ]
})
export class ChewbaccaUIModule { }
