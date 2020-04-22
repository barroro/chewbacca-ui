import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewDropdownMenuComponent } from './chew-dropdown-menu.component';
import { ChewDropdownItemDirective } from './chew-dropdown-item.directive';
import { ChewDropdownTriggerDirective } from './chew-dropdown-trigger.directive';
import { ChewDropdownComponent } from './chew-dropdown.component';

@NgModule({
  declarations: [
    ChewDropdownComponent,
    ChewDropdownMenuComponent,
    ChewDropdownTriggerDirective,
    ChewDropdownItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChewDropdownComponent,
    ChewDropdownMenuComponent,
    ChewDropdownTriggerDirective,
    ChewDropdownItemDirective
  ]
})
export class ChewDropdownModule { }
