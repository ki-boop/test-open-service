import { Component, OnInit } from '@angular/core';
import { CategoryModel, CategoryModelMenu } from 'src/app/model/category.model';
import { Store } from '@ngrx/store';
import { FilterModel } from 'src/app/model/filters.model';
import { ControlsOf, FormBuilder } from '@ngneat/reactive-forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryStore: Store<{ categoryMenu: CategoryModelMenu }>
  ) {}

  currentCategory: CategoryModel | null = null;

  options: CategoryModel[] = [{ id: 0, name: 'Не установлено' }];

  ngOnInit(): void {
    this.fetchCategories();
    this.filter.controls.category.valueChanges.subscribe(() =>
      this.findCategoryById()
    );
    this.activatedRoute.queryParams.subscribe((params) => {
      this.filter.controls.productName.setValue(params['search']);
      this.filter.controls.category.setValue(Number(params['categoryId']));
    });
  }

  filter = this.fb.group<ControlsOf<FilterModel>>({
    category: this.fb.control(0),
    productName: this.fb.control(''),
  });

  search() {
    this.router.navigate([], {
      queryParams: {
        search: this.filter.controls.productName.value,
      },
      queryParamsHandling: 'merge',
    });
  }

  private fetchCategories() {
    this.categoryStore.select('categoryMenu').subscribe((menu) => {
      this.options = [...this.options, ...menu.categories];
    });
  }

  private findCategoryById() {
    this.currentCategory =
      this.options.find((option) => {
        return option.id == this.filter.controls.category.value;
      }) || null;
  }

  selectCategory(event: CategoryModel) {
    this.filter.controls.category.setValue(event.id);
    this.router.navigate([], {
      queryParams: {
        categoryId: event.id,
      },
      queryParamsHandling: 'merge',
    });
  }
}
