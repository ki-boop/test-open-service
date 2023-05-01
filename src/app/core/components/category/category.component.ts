import { Component, OnInit } from '@angular/core';
import { CategoryModel, CategoryModelMenu } from 'src/app/model/category.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(private store: Store<{ categoryMenu: CategoryModelMenu }>) {}

  menu: CategoryModelMenu | null = null;

  ngOnInit(): void {
    this.store.select('categoryMenu').subscribe((res) => {
      this.menu = res;
    });
  }

  isActiveCategory(category: CategoryModel): boolean {
    return this.menu?.activeCategory === category.id;
  }

  get categories() {
    return this.menu?.categories;
  }
}
