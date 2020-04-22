import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewNotificationComponent } from './chew-notification.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { defaultNotificationConfig, NOTIFICATION_CONFIG_TOKEN } from './chew-notification-config';
import { ChewNotificationService } from './chew-notification.service';

@NgModule({
  declarations: [
    ChewNotificationComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  entryComponents: [
    ChewNotificationComponent
  ],
  providers: [
    // ChewNotificationService
  ]
})
export class ChewNotificationModule {
  public static forRoot(config = defaultNotificationConfig): ModuleWithProviders {
    return {
      ngModule: ChewNotificationModule,
      providers: [
        {
          provide: NOTIFICATION_CONFIG_TOKEN,
          useValue: config ? config : defaultNotificationConfig,
        },
      ],
    };
  }
}
