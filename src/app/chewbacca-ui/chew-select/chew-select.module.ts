import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewSelectComponent } from './chew-select/chew-select.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ChewOptionModule } from '../chew-option/chew-option.module';
import { ChewCheckboxModule } from '../checkbox/chew-checkbox.module';

@NgModule({
  declarations: [
    ChewSelectComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule,
    ChewOptionModule,
    ChewCheckboxModule
  ],
  exports: [
    ChewSelectComponent,
    ChewOptionModule,
  ]
})
export class ChewSelectModule { }
