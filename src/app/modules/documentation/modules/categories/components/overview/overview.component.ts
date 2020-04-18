import { Component, OnInit } from '@angular/core';

export class Category {
  title: string;
  description: string;
  path: string;
  icon: string;
};

export const categoriesList: Array<Category> = [
  {
    title: 'Getting started',
    description: 'This guide explains how to setup your Angular project to begin using Chewbacca-UI.',
    path: '../../dropdown',
    icon: 'fas fa-rocket'
  },
  // {
  //   title: 'Select',
  //   description: 'Allows the user select one or more options',
  //   path: '../../select',
  //   icon: 'fa fa-caret-down'
  // },
  // {
  //   title: 'Checkbox',
  //   description: 'Box that return boolean value',
  //   path: '../../checkbox',
  //   icon: 'fas fa-check-square'
  // },
  // {
  //   title: 'Toggle switch',
  //   description: 'Captures boolean that returns boolean value',
  //   path: '../../toggle-switch',
  //   icon: 'fa fa-toggle-on'
  // },
  // {
  //   title: 'Radio button',
  //   description: 'Return one option from a group',
  //   path: '../../radio',
  //   icon: 'fa fa-dot-circle'
  // },
  // {
  //   title: 'Input',
  //   description: 'Allows the user select one or more options',
  //   path: '../../input',
  //   icon: 'fa fa-minus'
  // }
]

@Component({
  selector: 'app-forms',
  template: `
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#" class="is-active">Overview</a></li>
            </ul>
          </nav>
          <h1 class="title">
            Overview
          </h1>
          <h2 class="subtitle is-4">
            An overview of what Chewbacca-UI as a framework is all about
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
export class OverviewComponent implements OnInit {

  categories = categoriesList;

  constructor() { }

  ngOnInit() {
  }

}
