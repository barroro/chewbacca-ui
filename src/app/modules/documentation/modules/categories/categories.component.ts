import { Component, OnInit } from '@angular/core';

export class Category {
  title: string;
  description: string;
  path: string;
  icon: string;
};

export const categoriesList: Array<Category> = [
  {
    title: 'Overview',
    description: 'An overview of what Chewbacca-UI as a framework is all about',
    path: 'overview',
    icon: 'fas fa-eye'
  },
  {
    title: 'Form Controls',
    description: 'Controls that collect and validate user input',
    path: 'forms',
    icon: 'fab fa-wpforms'
  },
  {
    title: 'Elements',
    description: 'Essential interface elements to create pages faster',
    path: 'elements',
    icon: 'fa fa-cube'
  },
  {
    title: 'Navigation',
    description: 'All the components you need to navigate between views',
    path: 'navigation',
    icon: 'fa fa-directions'
  }
]

@Component({
  selector: 'app-categories',
  template: `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#" class="is-active">Documentation</a></li>
            </ul>
          </nav>
          <h1 class="title">
            Documentation
          </h1>
          <h2 class="subtitle is-4">
            Everything you need to create a website with Chewbacca-UI
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <nav class="bd-links">
          <a *ngFor="let c of categories" routerLink="{{ c.path }}" class="bd-link">
            <h2 class="bd-link-name">
              <figure class="bd-link-figure">
                <span class="bd-link-icon has-text-link">
                  <i class="{{ c.icon }}"></i>
                </span>
              </figure>
              {{ c.title }}
            </h2>
            <p>{{ c.description }}</p>
          </a>
        </nav>
      </div>
    </section>
  `,
})
export class CategoriesComponent implements OnInit {

  categories = categoriesList;

  constructor() { }

  ngOnInit() {

  }

}
