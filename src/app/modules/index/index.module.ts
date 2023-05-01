import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexRoutingModule } from './index.routing';
import { CatalogModule } from '../catalog/catalog.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, IndexRoutingModule, SharedModule, CatalogModule],
  providers: [],
})
export class IndexModule {}
