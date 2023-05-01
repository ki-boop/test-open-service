import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog.component';
import { CatalogRoutingModule } from './catalog.rounting';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, CatalogRoutingModule, SharedModule],
  providers: [],
})
export class CatalogModule {}
