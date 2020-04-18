import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponentComponent } from './components/overview-component/overview-component.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputRoutingModule { }
