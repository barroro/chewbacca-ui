import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBulmaModule } from 'src/app/ngx-bulma/ngx-bulma.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBulmaModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxBulmaModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
