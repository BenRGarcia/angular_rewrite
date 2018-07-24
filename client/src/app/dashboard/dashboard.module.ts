import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { GetReposPageComponent } from './containers/get-repos-page.component';
import { TemplatesPageComponent } from './containers/templates-page.component';
import { PreviewPageComponent } from './containers/preview-page.component';
import { EditReposPageComponent } from './containers/edit-repos-page.component';
import { EditUserPageComponent } from './containers/edit-user-page.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    GetReposPageComponent,
    TemplatesPageComponent,
    PreviewPageComponent,
    EditReposPageComponent,
    EditUserPageComponent
  ]
})
export class DashboardModule { }
