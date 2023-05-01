export class FilterModel {
  productName: string;
  category: number;

  constructor(source: any) {
    this.productName = source.productName;
    this.category = source.category;
  }
}
