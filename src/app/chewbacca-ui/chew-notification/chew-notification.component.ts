import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { ChewNotificationAnimationState, notificationAnimations } from './chew-notification-animation';
import { NotificationData, NOTIFICATION_CONFIG_TOKEN, NotificationConfig, defaultNotificationConfig } from './chew-notification-config';
import { NotificationRef } from './notification-ref';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-chew-notification',
  templateUrl: './chew-notification.component.html',
  styleUrls: ['./chew-notification.component.scss'],
  animations: [notificationAnimations.fadeToast],
})
export class ChewNotificationComponent implements OnInit, OnDestroy {
  animationState: ChewNotificationAnimationState = 'default';
  iconType: string;

  private intervalId: number;

  constructor(
    readonly data: NotificationData,
    readonly ref: NotificationRef,
    @Inject(NOTIFICATION_CONFIG_TOKEN) public notificationConfig: NotificationConfig
  ) {
    //this.iconType = data.type === 'success' ? 'done' : data.type;
  }

  ngOnInit() {
    this.intervalId = window.setTimeout(() => this.animationState = 'closing', 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.ref.close();
  }

  onFadeFinished(event: AnimationEvent) {
    const { toState } = event;
    const isFadeOut = (toState as ChewNotificationAnimationState) === 'closing';
    const itFinished = this.animationState === 'closing';

    if (isFadeOut && itFinished) {
      this.close();
    }
  }
}
