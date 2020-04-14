import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, OnDestroy, ContentChild, TemplateRef, ChangeDetectionStrategy, ViewContainerRef, NgZone, ChangeDetectorRef, EmbeddedViewRef, ContentChildren, QueryList, HostListener, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable, fromEvent } from 'rxjs';
import { map, startWith, takeUntil, debounceTime, filter } from 'rxjs/operators';
import { createPopper } from '@popperjs/core';
import { TemplatePortalDirective } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ChewOptionComponent } from '../chew-option/chew-option.component';
import { FocusKeyManager, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'chew-select',
  templateUrl: './chew-select.component.html',
  styleUrls: ['./chew-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChewSelectComponent implements OnInit, OnChanges, OnDestroy {

  //declare inputs
  @Input() items: Array<any>;
  @Input() bindValue: string;
  @Input() bindLabel: string;
  @Input() placeholder: string;

  //templates
  @ContentChild('triggerTemplate', { static: false })
  triggerTemplateRef: TemplateRef<any>;

  @ContentChild('optionTemplate', { static: false })
  optionTemplateRef: TemplateRef<any>;

  //declare outputs
  @Output() changeOption = new EventEmitter<any>();
  @Output() closed = new EventEmitter<any>();

  opened: boolean = false;
  value: any = null;
  searchCtrl = new FormControl('');
  itemsFiltered: Array<any>;

  @Input()
  public reference: HTMLElement;

  unsubscribe$ = new Subject<void>();

  private view: EmbeddedViewRef<any>;
  popperRef = null;

  private originalItems = [];
  visibleOptions = 4;

  @ViewChildren(ChewOptionComponent) options: QueryList<ChewOptionComponent>;
  private keyManager: FocusKeyManager<ChewOptionComponent>;

  @ViewChild(TemplatePortalDirective, { static: false })
  public contentTemplate: TemplatePortalDirective;

  protected overlayRef: OverlayRef;

  //Elements ref
  @ViewChild('searchControl', { static: false }) searchCtrlRef: ElementRef;
  @ViewChild('triggerButton', { static: true }) triggerButton: ElementRef;

  constructor(
    private vcr: ViewContainerRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef,
    protected overlay: Overlay
  ) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items)
      this.itemsFiltered = this.items.slice();
  }

  ngAfterViewInit() {
    this.options.changes
      .subscribe(options => {
        this.keyManager = new FocusKeyManager(this.options)
          .withWrap();
        //.withTypeAhead();
      });
  }

  // @HostListener('keydown', ['$event'])
  // onKeydown(event) {
  //   this.keyManager.onKeydown(event);
  // }

  ngOnInit() {
    this.originalItems = [...this.items];
    this.searchCtrl.valueChanges
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(v => {
        this._filterItems(v);
      });
  }

  get label() {
    return this.value ? this.value[this.bindLabel] : this.placeholder;
  }

  private _filterItems(value: string) {
    const filterValue = value.toLowerCase();
    this.itemsFiltered = this.items.filter(item => item[this.bindLabel].toLowerCase().includes(filterValue));
    //requestAnimationFrame(() => (this.visibleOptions = this.itemsFiltered.length || 1));
    this.cdr.markForCheck();
  }

  clear() {
    this.searchCtrl.setValue('');
  }

  openPanel(event) {
    this.reference = event;
    this.opened = true;
    setTimeout(() => {
      this.searchCtrlRef.nativeElement.focus();
    });
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.close());
  }

  protected getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.reference)
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

  private syncWidth() {
    if (!this.overlayRef) {
      return;
    }

    const refRect = this.reference.getBoundingClientRect();
    this.overlayRef.updateSize({ width: refRect.width });
  }

  onChangeOption(value) {
    this.value = value;
    //this.close();
    this.changeOption.emit(value);
  }

  close() {
    this.closed.emit();
    this.overlayRef.dispose();
    this.searchCtrl.patchValue('');
    this.opened = false;
  }

  onKeydown(event) {
    if (event.keyCode === ENTER) {
      this.onChangeOption(this.keyManager.activeItem.value);
    } else {
      this.keyManager.onKeydown(event);
    }
  }

}
