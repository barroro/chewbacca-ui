import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { FormsComponent } from './components/forms/forms.component';
import { ElementsComponent } from './components/elements/elements.components';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    FormsComponent,
    ElementsComponent,
    NavigationComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
