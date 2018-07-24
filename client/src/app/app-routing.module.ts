import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/containers/not-found-page.component';
import { AppComponent } from './core/containers/app.component';
import { HomePageComponent } from './core/containers/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
