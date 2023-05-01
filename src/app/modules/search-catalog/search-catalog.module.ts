import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchCatalogRoutingModule } from './search-catalog.routing';
import { SearchCatalogComponent } from './components/search-catalog.component';

@NgModule({
  declarations: [SearchCatalogComponent],
  imports: [CommonModule, SharedModule, SearchCatalogRoutingModule],
  providers: [],
})
export class SearchCatalogModule {}
