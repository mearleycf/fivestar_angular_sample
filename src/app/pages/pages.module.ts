import { TemplatesModule } from './../templates/templates.module';
import { MoleculesModule } from './../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesCoveragesComponent } from './coverages/coverages.component';
import { PagesQuotesComponent } from './quotes/quotes.component';
import { OverviewComponent } from './overview/overview.component';
import { GeneralinfoComponent } from './generalinfo/generalinfo.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { AddlquestionsComponent } from './addlquestions/addlquestions.component';
import { AtomsupdateComponent } from './atomsupdate/atomsupdate.component';


@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    TemplatesModule
  ],
  declarations: [
    PagesCoveragesComponent,
    PagesQuotesComponent,
    OverviewComponent,
    GeneralinfoComponent,
    ContactinfoComponent,
    AddlquestionsComponent,
    AtomsupdateComponent
  ]
})
export class PagesModule { }
