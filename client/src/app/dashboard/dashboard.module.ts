import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardPageComponent
  ]
})
export class DashboardModule { }
