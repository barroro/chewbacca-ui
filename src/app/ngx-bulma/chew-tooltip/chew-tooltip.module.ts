import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewTooltipComponent } from './chew-tooltip.component';
import { ChewTooltipDirective } from './chew-tooltip.directive';

@NgModule({
  declarations: [
    ChewTooltipComponent,
    ChewTooltipDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChewTooltipDirective
  ],
  entryComponents: [
    ChewTooltipComponent
  ]
})
export class ChewTooltipModule { }
