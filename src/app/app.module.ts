import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { DirectivesModule } from './shared/directives/directives/directives.module';
import { MoleculesModule } from './molecules/molecules.module';
import { TemplatesModule } from './templates/templates.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { ROUTES } from '@angular/router';
import { ColorsComponent } from './atoms/colors/atoms.colors.component';
import { FontsComponent } from './atoms/fonts/fonts.component';
import { RaisedButtonComponent } from './atoms/raised-button/raised-button.component';
import { March21Component } from './pages/march21/march21.component';
import { March21p2Component } from './pages/march21p2/march21p2.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ColorsComponent,
    FontsComponent,
    RaisedButtonComponent,
    March21Component,
    March21p2Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    SharedModule,
    DirectivesModule,
    CommonModule,
    MoleculesModule,
    TemplatesModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
