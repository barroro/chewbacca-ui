import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChewbaccaUIModule } from 'src/app/ngx-bulma/chewbacca-ui.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChewbaccaUIModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    ChewbaccaUIModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
