import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './store/categories-store/categories.reducer';
import { productsReducer } from './store/products-store/products.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { FilterLayoutComponent } from './components/layout/filter-layout/filter-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filters/filters.component';
import { basketReducer } from './store/basket-store/basket.reducer';
import { BasketComponent } from './components/basket/basket.component';
import { NgClickOutsideDirective } from 'ng-click-outside2';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    CategoryComponent,
    FilterLayoutComponent,
    FilterComponent,
    BasketComponent,
  ],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgClickOutsideDirective,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    StoreModule.forRoot({
      products: productsReducer,
      categoryMenu: categoryReducer,
      basket: basketReducer,
    }),
  ],
  providers: [],
})
export class CoreModule {}
