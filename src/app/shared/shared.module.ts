import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/button/button.component';
import { RouterModule } from '@angular/router';
import { NotingFoundComponent } from './components/noting-found/noting-found.vomponent';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { InputComponent } from './components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CategoryAutocompleteComponent } from './components/category-autocomplete/category-autocomplete.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ButtonComponent,
    NotingFoundComponent,
    SearchInputComponent,
    InputComponent,
    CategoryAutocompleteComponent,
  ],
  exports: [
    ProductCardComponent,
    ButtonComponent,
    NotingFoundComponent,
    SearchInputComponent,
    InputComponent,
    CategoryAutocompleteComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgClickOutsideDirective,
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [],
})
export class SharedModule {}
