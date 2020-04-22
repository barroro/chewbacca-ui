import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewButtonDirective } from './chew-button.directive';

@NgModule({
  declarations: [
    ChewButtonDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChewButtonDirective
  ]
})
export class ChewButtonModule { }
