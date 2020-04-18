import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponentsComponent } from './components/overview-components/overview-components.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToggleSwitchRoutingModule { }
