import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCatalogComponent } from './components/search-catalog.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCatalogRoutingModule {}
