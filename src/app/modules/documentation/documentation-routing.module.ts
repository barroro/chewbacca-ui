import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('./modules/categories/categories.module').then(mod => mod.CategoriesModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./modules/forms/forms.module').then(mod => mod.FormsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
