import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { ProductModel } from 'src/app/model/product.model';
import { CategoryModel } from 'src/app/model/category.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setActiveCategory } from 'src/app/core/store/categories-store/categories.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  products: ProductModel[] | null = null;
  categories: CategoryModel[] | null = null;
  categoryId: number | null = null;

  constructor(
    private catalogService: CatalogService,
    private activatedRoute: ActivatedRoute,
    private categoryStore: Store<{ categories: CategoryModel[] }>,
    private productsStore: Store<{ products: ProductModel[] }>
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.categoryId = Number(params['categoryId']);
      this.categoryStore.dispatch(
        setActiveCategory({ categoryId: this.categoryId })
      );
      this.selectFetchProducts.then(() => {
        this.productsStore.select('products').subscribe((res) => {
          this.products = res;
        });
      });
    });
  }

  get selectFetchProducts() {
    if (!this.categoryId) return this.catalogService.fetchAny();
    return this.catalogService.getProductsByCategoryId(this.categoryId);
  }

  get isHasProducts() {
    return !!this.products?.length;
  }
}
