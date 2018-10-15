import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from './../atoms/atoms.module';

import { CombinedPhoneComponent } from './combined-phone/combined-phone.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { CoveragesComponent } from './container-coverage/coverages/coverages.component';
import { ContainerCoverageComponent } from './container-coverage/container-coverage.component';
import { CoveragePlComponent } from './coverage-pl/coverage-pl.component';
import { CoverageGlComponent } from './coverage-gl/coverage-gl.component';
import { CoverageWorkersComponent } from './coverage-workers/coverage-workers.component';
import { CoveragePropertyComponent } from './coverage-property/coverage-property.component';
import { CoverageBopComponent } from './coverage-bop/coverage-bop.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule
  ],
  declarations: [
    CombinedPhoneComponent,
    MainNavigationComponent,
    CoveragesComponent,
    ContainerCoverageComponent,
    CoveragePlComponent,
    CoverageGlComponent,
    CoverageWorkersComponent,
    CoveragePropertyComponent,
    CoverageBopComponent
  ],
  exports: [
    AtomsModule,
    CombinedPhoneComponent,
    MainNavigationComponent,
    ContainerCoverageComponent,
    CoveragePlComponent,
    CoverageGlComponent,
    CoverageWorkersComponent,
    CoveragePropertyComponent,
    CoverageBopComponent
  ]
})
export class MoleculesModule { }
