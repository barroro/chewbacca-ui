import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCodeComponent } from './doc-code/doc-code.component';
import { DocExampleViewerComponent } from './doc-example-viewer/doc-example-viewer.component';
import { ChewbaccaUIModule } from 'src/app/chewbacca-ui/chewbacca-ui.module';

@NgModule({
  declarations: [
    DocCodeComponent,
    DocExampleViewerComponent,
  ],
  imports: [
    CommonModule,
    ChewbaccaUIModule
  ],
  exports: [
    DocCodeComponent,
    DocExampleViewerComponent,
  ]
})
export class SharedComponentsModule { }
