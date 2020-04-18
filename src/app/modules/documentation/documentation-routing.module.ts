import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'categories' },
      {
        path: 'categories',
        loadChildren: () => import('./modules/categories/categories.module').then(mod => mod.CategoriesModule),
      },
      {
        path: 'toggle-switch',
        loadChildren: () => import('./modules/toggle-switch/toggle-switch.module').then(mod => mod.ToggleSwitchModule),
      },
      {
        path: 'checkbox',
        loadChildren: () => import('./modules/checkbox/checkbox.module').then(mod => mod.CheckboxModule),
      },
      {
        path: 'radio',
        loadChildren: () => import('./modules/radio-button/radio-button.module').then(mod => mod.RadioButtonModule),
      },
      {
        path: 'input',
        loadChildren: () => import('./modules/input/input.module').then(mod => mod.InputModule),
      },
      {
        path: 'select',
        loadChildren: () => import('./modules/select/select.module').then(mod => mod.SelectModule),
      },
      {
        path: 'button',
        loadChildren: () => import('./modules/button/button.module').then(mod => mod.ButtonModule),
      },
      {
        path: 'dropdown',
        loadChildren: () => import('./modules/dropdown/dropdown.module').then(mod => mod.DropdownModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
