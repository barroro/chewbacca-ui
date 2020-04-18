import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocCodeComponent } from './doc-code/doc-code.component';
import { ChewbaccaUIModule } from 'src/app/ngx-bulma/chewbacca-ui.module';
import { DocExampleViewerComponent } from './doc-example-viewer/doc-example-viewer.component';
import { DocExampleViewerTestComponent } from './doc-example-viewer-test/doc-example-viewer-test.component';

@NgModule({
  declarations: [
    DocCodeComponent,
    DocExampleViewerComponent,
    DocExampleViewerTestComponent,
  ],
  imports: [
    CommonModule,
    ChewbaccaUIModule
  ],
  exports: [
    DocCodeComponent,
    DocExampleViewerComponent,
    DocExampleViewerTestComponent
  ]
})
export class SharedComponentsModule { }
