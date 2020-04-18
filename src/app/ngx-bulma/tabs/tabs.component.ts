import { Component, OnInit, AfterContentInit, QueryList, ContentChildren, Output, EventEmitter, Input } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  template: `
    <div class="tabs {{class}}">
      <ul role="tablist" aria-label="Sample Tabs">
        <li *ngFor="let tab of tabs; let i = index" (click)="selectTab(tab, i)" [class.is-active]="tab.active" role="tab">
          <a>{{tab.title}}</a>
        </li>
      </ul>
    </div>
    <ng-content></ng-content>
  `,
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @Output() selectedTabChange = new EventEmitter<TabChangeEvent>();
  @Input() class: string;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first, 0);
    }
  }

  selectTab(tab: TabComponent, i: number) {
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    this.selectedTabChange.emit({ index: i });
  }

}

export interface TabChangeEvent {
  index: number;
}
