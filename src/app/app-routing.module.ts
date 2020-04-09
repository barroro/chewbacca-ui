import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
      },
      {
        path: 'documentation',
        loadChildren: () => import('./modules/documentation/documentation.module').then(mod => mod.DocumentationModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
