import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent, PizzaPartyComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, PizzaPartyComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    PizzaPartyComponent
  ]
})
export class HomeModule { }
