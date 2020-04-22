import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewOptionComponent } from '../chew-option/chew-option.component';
import { ChewCheckboxModule } from '../checkbox/chew-checkbox.module';

@NgModule({
  declarations: [
    ChewOptionComponent,
  ],
  imports: [
    CommonModule,
    ChewCheckboxModule
  ],
  exports: [
    ChewOptionComponent,
  ]
})
export class ChewOptionModule { }
