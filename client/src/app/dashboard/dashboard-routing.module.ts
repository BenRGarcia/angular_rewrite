import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetReposPageComponent } from './containers/get-repos-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'getrepos' },
  { path: 'getrepos', component: GetReposPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
