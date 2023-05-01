import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product.model';
import { Store } from '@ngrx/store';
import { SearchCatalogService } from '../services/search-catalog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-catalog',
  templateUrl: './search-catalog.component.html',
  styleUrls: ['./search-catalog.component.scss'],
})
export class SearchCatalogComponent implements OnInit {
  products: ProductModel[] | null = null;

  constructor(
    private productsStore: Store<{ products: ProductModel[] }>,
    private searchCatalogService: SearchCatalogService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsStore.select('products').subscribe((res) => {
      this.products = res;
    });
    this.activatedRoute.queryParams.subscribe((params) => {
      const id = Number(params?.['categoryId'] || null);
      const search = params?.['search'].toLowerCase() || '';
      this.searchCatalogService.searchProducts(id, search);
    });
  }

  get isHasProducts() {
    return !!this.products?.length;
  }
}
