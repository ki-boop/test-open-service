import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { FilterLayoutComponent } from './core/components/layout/filter-layout/filter-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: LayoutComponent,
        loadChildren: () =>
          import('./modules/index/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'catalog',
        component: LayoutComponent,
        loadChildren: () =>
          import('./modules/catalog/catalog.module').then(
            (m) => m.CatalogModule
          ),
      },
      {
        path: 'search',
        pathMatch: 'full',
        component: FilterLayoutComponent,
        loadChildren: () =>
          import('./modules/search-catalog/search-catalog.module').then(
            (m) => m.SearchCatalogModule
          ),
      },
      {
        path: '**',
        component: LayoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
