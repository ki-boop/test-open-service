export class CategoryModel {
  id: number;
  name: string;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
  }
}

export class CategoryModelMenu {
  activeCategory: number;
  categories: CategoryModel[];

  constructor(source: any) {
    this.activeCategory = source.activeCategory;
    this.categories = source.categories;
  }
}
