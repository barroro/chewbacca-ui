import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef, ConnectedPosition } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChewTooltipComponent } from './chew-tooltip.component';
import { fromEvent } from 'rxjs';
import { startWith, filter, debounceTime, map } from 'rxjs/operators';

@Directive({ selector: '[chewTooltip]' })
export class ChewTooltipDirective implements OnInit {

  @Input('chewTooltip') text = '';
  @Input() positionX = 'center';
  @Input() positionY = 'bottom';

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef) {

    // fromEvent(elementRef.nativeElement, 'mousemove')
    //   .pipe(
    //       map(event => event),
    //       startWith(event),
    //       debounceTime(300),
    //   )
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: 8,
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    const tooltipRef: ComponentRef<ChewTooltipComponent>
      = this.overlayRef.attach(new ComponentPortal(ChewTooltipComponent));
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseleave')
  hide(event) {
    this.overlayRef.detach();
  }
}
