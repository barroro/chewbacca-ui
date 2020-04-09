import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCodeComponent } from './doc-code/doc-code.component';
import { NgxBulmaModule } from 'src/app/ngx-bulma/ngx-bulma.module';

@NgModule({
  declarations: [DocCodeComponent],
  imports: [
    CommonModule,
    NgxBulmaModule
  ],
  exports: [
    DocCodeComponent
  ]
})
export class SharedComponentsModule { }
