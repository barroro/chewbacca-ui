import { InjectionToken, TemplateRef } from '@angular/core';

export class NotificationData {
  type: NotificationType;
  text?: string;
  template?: TemplateRef<any>;
  templateContext?: {};
}

export type NotificationType = 'warning' | 'info' | 'success';

export interface NotificationConfig {
  position?: {
    top: number;
    right: number;
  };
  animation?: {
    fadeOut: number;
    fadeIn: number;
  };
}

export const defaultNotificationConfig: NotificationConfig = {
  position: {
    top: 20,
    right: 20,
  },
  animation: {
    fadeOut: 500,
    fadeIn: 100,
  },
};

export const NOTIFICATION_CONFIG_TOKEN = new InjectionToken<string>('notification-config');