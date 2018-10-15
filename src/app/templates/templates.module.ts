import { MoleculesModule } from './../molecules/molecules.module';
import { AtomsModule } from './../atoms/atoms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateBaseComponent } from './template-base/template-base.component';
import { MainNavigationComponent } from '../molecules/main-navigation/main-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule
  ],

  declarations: [
    TemplateBaseComponent
  ],

  exports: [
    TemplateBaseComponent
  ]
})
export class TemplatesModule { }
