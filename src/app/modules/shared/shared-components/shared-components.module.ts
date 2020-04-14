import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCodeComponent } from './doc-code/doc-code.component';
import { ChewbaccaUIModule } from 'src/app/ngx-bulma/chewbacca-ui.module';

@NgModule({
  declarations: [DocCodeComponent],
  imports: [
    CommonModule,
    ChewbaccaUIModule
  ],
  exports: [
    DocCodeComponent
  ]
})
export class SharedComponentsModule { }
