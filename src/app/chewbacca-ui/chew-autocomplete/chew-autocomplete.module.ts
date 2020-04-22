import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ChewAutocompleteComponent } from './chew-autocomplete.component';
import { ChewOptionComponent } from '../chew-option/chew-option.component';
import { ChewOptionModule } from '../chew-option/chew-option.module';

@NgModule({
  declarations: [
    ChewAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    ReactiveFormsModule,
    OverlayModule,
    PortalModule,
    ChewOptionModule
  ],
  exports: [
    ChewAutocompleteComponent,
  ]
})
export class ChewAutocompleteModule { }
