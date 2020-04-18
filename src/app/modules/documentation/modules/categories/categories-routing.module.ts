import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { FormsComponent } from './components/forms/forms.component';
import { ElementsComponent } from './components/elements/elements.components';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  },
  {
    path: 'navigation',
    component: NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
