import { Injectable, Injector, Inject } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, ComponentType } from '@angular/cdk/portal';
import { NotificationRef } from './notification-ref';
import { NOTIFICATION_CONFIG_TOKEN, NotificationConfig, NotificationData, defaultNotificationConfig } from './chew-notification-config';
import { ChewNotificationComponent } from './chew-notification.component';


@Injectable({ providedIn: 'root' })
export class ChewNotificationService {
  private lastToast: NotificationRef;

  constructor(
    private overlay: Overlay,
    private parentInjector: Injector,
    @Inject(NOTIFICATION_CONFIG_TOKEN) private toastConfig: NotificationConfig
  ) { }

  show(data: NotificationData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new NotificationRef(overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(ChewNotificationComponent, null, injector);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  showFromComponent(component: ComponentType<any>, data: NotificationData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({ positionStrategy });

    const toastRef = new NotificationRef(overlayRef);
    this.lastToast = toastRef;

    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(component);

    overlayRef.attach(toastPortal);

    return toastRef;
  }

  getPositionStrategy() {
    return this.overlay.position()
      .global()
      .top(this.getPosition())
      .right(this.toastConfig.position.right + 'px');
  }

  getPosition() {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible
      ? this.lastToast.getPosition().bottom
      : this.toastConfig.position.top;

    return position + 'px';
  }

  getInjector(data: NotificationData, toastRef: NotificationRef, parentInjector: Injector) {
    const tokens = new WeakMap();

    tokens.set(NotificationData, data);
    tokens.set(NotificationRef, toastRef);

    return new PortalInjector(parentInjector, tokens);
  }
}