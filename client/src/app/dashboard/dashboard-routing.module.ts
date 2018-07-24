import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetReposPageComponent } from './containers/get-repos-page.component';
import { EditUserPageComponent } from './containers/edit-user-page.component';
import { EditReposPageComponent } from './containers/edit-repos-page.component';
import { TemplatesPageComponent } from './containers/templates-page.component';
import { PreviewPageComponent } from './containers/preview-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'getrepos' },
  { path: 'getrepos', component: GetReposPageComponent },
  { path: 'edituser', component: EditUserPageComponent },
  { path: 'editrepos', component: EditReposPageComponent },
  { path: 'template', component: TemplatesPageComponent },
  { path: 'preview', component: PreviewPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
