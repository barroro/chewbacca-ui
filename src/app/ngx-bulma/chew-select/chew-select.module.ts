import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewSelectComponent } from './chew-select/chew-select.component';
import { ChewOptionComponent } from './chew-option/chew-option.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChewSelectComponent,
    ChewOptionComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    ReactiveFormsModule
  ],
  exports: [
    ChewSelectComponent,
    ChewOptionComponent
  ]
})
export class ChewSelectModule { }
