import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubLoginComponent } from './github-login/github-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: GithubLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <- for debugging, set to boolean `true`
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
