import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewSelectComponent } from './chew-select/chew-select.component';
import { ChewOptionComponent } from './chew-option/chew-option.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { TriggerTemplateDirective } from './template-trigger.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    ChewSelectComponent,
    ChewOptionComponent,
    TriggerTemplateDirective
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [
    ChewSelectComponent,
    ChewOptionComponent,
    TriggerTemplateDirective
  ]
})
export class ChewSelectModule { }
