import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GithubLoginComponent } from './github-login/github-login.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubLoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <- always leave as last indice, wildcard route found in module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
