import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, OnDestroy, ContentChild, TemplateRef, ChangeDetectionStrategy, ViewContainerRef, NgZone, ChangeDetectorRef, EmbeddedViewRef, ContentChildren, QueryList, HostListener, ViewChildren, AfterViewChecked, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR, SelectControlValueAccessor } from '@angular/forms';
import { Subject, Observable, fromEvent, merge } from 'rxjs';
import { map, startWith, takeUntil, debounceTime, filter, switchMap } from 'rxjs/operators';
import { createPopper } from '@popperjs/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { FocusKeyManager, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';
import { ChewOptionComponent } from '../../chew-option/chew-option.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { trigger, state, style, transition, animate } from '@angular/animations';

const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
  host: {
    '[id]': 'id',
  },
  selector: 'chew-select',
  templateUrl: './chew-select.component.html',
  styleUrls: ['./chew-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChewSelectComponent),
      multi: true
    }
  ],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('3s')
      ]),
      transition('closed => open', [
        animate('3s')
      ]),
    ]),
  ]
})
export class ChewSelectComponent implements OnInit, OnDestroy, AfterViewChecked, ControlValueAccessor {

  //Generate id
  static nextId = 0;
  id = `chew-select-${ChewSelectComponent.nextId++}`;

  //declare outputs
  @Output() changeOption = new EventEmitter<any>();
  @Output() closed = new EventEmitter<any>();

  opened: boolean = false;
  valueSelected: string;

  unsubscribe$ = new Subject<void>();

  protected overlayRef: OverlayRef;

  @Input()
  public reference: HTMLElement;

  @ContentChildren(ChewOptionComponent) options: QueryList<ChewOptionComponent>;

  //Elements ref
  @ViewChild('origin', { static: true }) origin: ElementRef;

  @ViewChild(TemplatePortalDirective, { static: false })
  public contentTemplate: TemplatePortalDirective;

  stateChanges = new Subject<void>();

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  private _multiple: boolean;
  get multiple(): boolean {
    return this._multiple;
  }
  @Input()
  set multiple(value: boolean) {
    this._multiple = coerceBooleanProperty(value);
  }

  private _value: any;
  get value(): any {
    return this._value;
  };
  @Input()
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.stateChanges.next();
    }
  }

  onChange = (_: any) => { }
  onTouch = () => { }

  constructor(
    private vcr: ViewContainerRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    protected overlay: Overlay
  ) { }

  //Value Accessor methods
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterViewChecked(): void {

  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  setValueSelected(value: any) {
    let option = this.options.find(o => o.value == value);
    if (option) {
      option.setSelectedClass();
      this.valueSelected = option.element.innerText;
      this.cdr.markForCheck();
    }
  }

  ngAfterViewInit() {
    // let option = this.options.find(o => o.value == this.value);
    // console.log('option: ', option, this.value);
    // if (option) {
    //   option.setSelectedClass();
    //   this.valueSelected = option.element.innerText;
    //   this.cdr.markForCheck();
    // }
    console.log(this._value);
    fromEvent(this.origin.nativeElement, 'focus')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.openPanel();
        this.optionsClick()
          .pipe(takeUntil(this.overlayRef.detachments()))
          .subscribe((value: string) => {
            this.options.forEach(o => {
              if (o.value == value) {
                this.valueSelected = o.element.innerText;
                this.value = value;
                o.setSelectedClass();
              } else {
                o.setDeselectClass();
              }
            })
            this.changeOption.emit(value);
            this.onTouch();
            this.onChange(value);
            this.close();
            //this.origin.nativeElement.focus();
          });
      });
  }

  ngOnInit() {
    //console.log(this._multiple);
  }

  get label() {
    return this.valueSelected ? this.valueSelected : this.placeholder;
  }

  optionsClick() {
    // return this.options.changes.pipe(
    //   switchMap(options => {
    //     console.log('options changes');
    //     const clicks$ = options.map(option => option.click$);
    //     return merge(...clicks$);
    //   })
    // );
    const clicks$ = this.options.map(option => option.click$);
    return merge(...clicks$);
  }

  openPanel() {
    this.opened = true;
    this.reference = this.origin.nativeElement;
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.overlayRef.backdropClick()
      .pipe(
        takeUntil(this.overlayRef.detachments())
      )
      .subscribe(() => this.close());
  }

  protected getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.origin.nativeElement)
      .withPush(false)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]);

    const scrollStrategy = this.overlay.scrollStrategies.reposition();

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      scrollStrategy: scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }

  onChangeOption(value) {
    this.value = value;
  }

  close() {
    this.opened = false;
    this.closed.emit();
    this.overlayRef.detach();
  }

  onKeydown(event) {
    // if (event.keyCode === ENTER) {
    //   this.onChangeOption(this.keyManager.activeItem.value);
    // } else {
    //   this.keyManager.onKeydown(event);
    // }
  }

}
