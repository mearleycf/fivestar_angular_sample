import { AtomsupdateComponent } from './../pages/atomsupdate/atomsupdate.component';
import { AddlquestionsComponent } from './../pages/addlquestions/addlquestions.component';
import { ContactinfoComponent } from './../pages/contactinfo/contactinfo.component';
import { GeneralinfoComponent } from './../pages/generalinfo/generalinfo.component';
import { OverviewComponent } from './../pages/overview/overview.component';
import { PagesQuotesComponent } from './../pages/quotes/quotes.component';
import { PagesCoveragesComponent } from './../pages/coverages/coverages.component';
import { CoveragesComponent } from './../molecules/container-coverage/coverages/coverages.component';
import { PagesModule } from './../pages/pages.module';
import { TemplatesModule } from './../templates/templates.module';
import { MoleculesModule } from './../molecules/molecules.module';
import { AtomsModule } from './../atoms/atoms.module';
import { March21p2Component } from './../pages/march21p2/march21p2.component';
import { March21Component } from './../pages/march21/march21.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TemplateBaseComponent } from '../templates/template-base/template-base.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
      path: 'atoms',
      component: AtomsModule,
    },
    {
        path: 'basetemplate',
        component: TemplateBaseComponent,
    },
     {
      path: 'examples/march21',
      component: March21Component
    },
    {
      path: 'examples/march21p2',
      component: March21p2Component
    },
    {
      path: 'pages/coverages',
      component: PagesCoveragesComponent
    },
    {
        path: 'pages/quotes',
        component: PagesQuotesComponent
    },
    {
      path: 'demo/overview',
      component: OverviewComponent
    },
    {
      path: 'pages/atomsupdate',
      component: AtomsupdateComponent
    },
    {
      path: 'demo/generalinfo',
      component: GeneralinfoComponent
    },
    {
      path: 'demo/contactinfo',
      component: ContactinfoComponent
    },
    {
      path: 'demo/addlquestions',
      component: AddlquestionsComponent
    },
    {
      path: 'demo/coverages',
      component: PagesCoveragesComponent
    },
    {
      path: 'demo/quote',
      component: PagesQuotesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
