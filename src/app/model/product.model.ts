export class ProductModel {
  id: number;
  name: string;
  category: number;
  price: number;
  image: string;

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.category = source.category;
    this.price = source.price;
    this.image = source.image;
  }
}

export class ProductInBasket extends ProductModel {
  count: number = 0;

  constructor(source: any) {
    super(source);
    this.count = source.count;
  }
}
