import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChewRadioButtonComponent } from './chew-radio-button.component';
import { ChewRadioGroupComponent } from './chew-radio-group.component';

@NgModule({
  declarations: [
    ChewRadioButtonComponent,
    ChewRadioGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChewRadioButtonComponent,
    ChewRadioGroupComponent
  ]
})
export class ChewRadioButtonModule { }
