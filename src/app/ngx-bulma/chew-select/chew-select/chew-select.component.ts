import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild, ElementRef, OnDestroy, ContentChild, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'chew-select',
  templateUrl: './chew-select.component.html',
  styleUrls: ['./chew-select.component.scss']
})
export class ChewSelectComponent implements OnInit, OnChanges, OnDestroy {

  //declare inputs
  @Input() items: Array<any>;
  @Input() bindValue: string;
  @Input() bindLabel: string;
  @Input() placeholder: string;
  @Input() virtualized: boolean = false;

  //templates
  @ContentChild('triggerTemplate', { static: false })
  triggerTemplateRef: TemplateRef<any>;

  @ContentChild('optionTemplate', { static: false })
  optionTemplateRef: TemplateRef<any>;

  //declare outputs
  @Output() changeOption = new EventEmitter<any>();

  opened: boolean = false;
  value: any = null;
  searchCtrl = new FormControl('');
  itemsFiltered: Array<any>;

  unsubscribe$ = new Subject<void>();

  //Elements ref
  @ViewChild('searchControl', { static: true }) searchCtrlRef: ElementRef;

  constructor() { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items)
      this.itemsFiltered = this.items.slice();
  }

  ngOnInit() {
    console.log(this.optionTemplateRef);
    this.searchCtrl.valueChanges
      .subscribe(v => {
        this.itemsFiltered = this._filterItems(v);
      });
    // this.filteredItems = this.searchCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => value ? this._filterItems(value) : this.items.slice()),
    //     takeUntil(this.unsubscribe$)
    //   );
  }

  private _filterItems(value): Array<any> {
    const filterValue = value.toLowerCase();
    return this.items.filter(item => item[this.bindLabel].toLowerCase().indexOf(filterValue) === 0);
  }

  openPanel() {
    this.opened = true;
    setTimeout(() => {
      this.searchCtrlRef.nativeElement.focus();
    }, 0);
  }

  onChangeOption(value) {
    this.value = value;
    this.opened = false;
    this.changeOption.emit(value);
  }

}
