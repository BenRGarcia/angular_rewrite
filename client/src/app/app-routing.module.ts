import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GithubLoginComponent } from './github-login/github-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: GithubLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <- for debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
