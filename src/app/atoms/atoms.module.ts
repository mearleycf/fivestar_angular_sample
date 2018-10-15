import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatInput } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/';
import { NgControl } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TypeRadioComponent } from '../atoms/type-radio/type-radio.component';
import { ContainerCardComponent } from '../atoms/container-card/container-card.component';
import { TypeInputComponent } from '../atoms/type-input/type-input.component';
import { TypeDateComponent } from '../atoms/type-date/type-date.component';
import { TypeSelectComponent } from '../atoms/type-select/type-select.component';
import { MenuTextComponent } from '../atoms/header-nav/menu-text/menu-text.component';
import { ProgressBarComponent } from '../atoms/progress-bar/progress-bar.component';
import { PgrLogoComponent } from '../atoms/header-nav/pgr-logo/pgr-logo.component';
import { TypeAutocompleteComponent } from './type-autocomplete/type-autocomplete.component';
import { TypeCheckboxComponent } from './type-checkbox/type-checkbox.component';
import { AdvanceButtonComponent } from './advance-button/advance-button.component';
import { ContainerCircleIconComponent } from './container-circle-icon/container-circle-icon.component';
import { ContainerFooterComponent } from './container-footer/container-footer.component';
import { ContainerQuoteNumberComponent } from './container-quote-number/container-quote-number.component';
import { ContainerUnderlineComponent } from './container-underline/container-underline.component';
import { ContainerSectionHeaderComponent } from './container-section-header/container-section-header.component';
import { ActionTooltipComponent } from './action-tooltip/action-tooltip.component';
import { TypeCheckboxGroupComponent } from './type-checkbox-group/type-checkbox-group.component';
import { AssetGlComponent } from './asset-gl/asset-gl.component';
import { AssetPlComponent } from './asset-pl/asset-pl.component';
import { AssetBopComponent } from './asset-bop/asset-bop.component';
import { AssetWorkersComponent } from './asset-workers/asset-workers.component';
import { AssetPropertyComponent } from './asset-property/asset-property.component';

@NgModule({
  imports: [
    MatIconModule,
    CommonModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTooltipModule
   ],
  declarations: [
    MenuTextComponent,
    ProgressBarComponent,
    TypeRadioComponent,
    ContainerCardComponent,
    TypeInputComponent,
    TypeDateComponent,
    TypeSelectComponent,
    PgrLogoComponent,
    TypeAutocompleteComponent,
    TypeCheckboxComponent,
    ContainerCircleIconComponent,
    ContainerFooterComponent,
    ContainerQuoteNumberComponent,
    ContainerUnderlineComponent,
    ContainerSectionHeaderComponent,
    PgrLogoComponent,
    AdvanceButtonComponent,
    ActionTooltipComponent,
    TypeCheckboxGroupComponent,
    AssetGlComponent,
    AssetPlComponent,
    AssetBopComponent,
    AssetWorkersComponent,
    AssetPropertyComponent
  ],
  providers: [ ],
  exports: [
    MatIconModule,
    CommonModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatMenuModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MenuTextComponent,
    ProgressBarComponent,
    MatButtonModule,
    TypeRadioComponent,
    ContainerCardComponent,
    ContainerFooterComponent,
    ContainerQuoteNumberComponent,
    TypeInputComponent,
    TypeDateComponent,
    TypeSelectComponent,
    PgrLogoComponent,
    TypeAutocompleteComponent,
    TypeCheckboxComponent,
    ContainerUnderlineComponent,
    ContainerSectionHeaderComponent,
    PgrLogoComponent,
    AdvanceButtonComponent,
    ActionTooltipComponent,
    TypeCheckboxGroupComponent,
    AssetGlComponent,
    AssetPlComponent,
    AssetBopComponent,
    AssetWorkersComponent,
    AssetPropertyComponent,
    
  ]
})

export class AtomsModule {}
