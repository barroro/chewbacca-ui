import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { ButtonOutlinedDirective } from './button-outlined.directive';
import { ButtonRoundedDirective } from './button-rounded.directive';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { CheckboxComponent } from './checkbox';
import { ChewSelectModule } from './chew-select/chew-select.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Scroll } from '@angular/router';

@NgModule({
  declarations: [
    ButtonDirective,
    ButtonOutlinedDirective,
    ButtonRoundedDirective,
    DropdownMenuComponent,
    DropdownItemDirective,
    DropdownComponent,
    NavbarComponent,
    TabsComponent,
    TabComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    ChewSelectModule,
    ScrollingModule
  ],
  exports: [
    ButtonDirective,
    ButtonOutlinedDirective,
    ButtonRoundedDirective,
    DropdownMenuComponent,
    DropdownItemDirective,
    DropdownComponent,
    NavbarComponent,
    TabsComponent,
    TabComponent,
    CheckboxComponent,
    ChewSelectModule
  ]
})
export class NgxBulmaModule { }
