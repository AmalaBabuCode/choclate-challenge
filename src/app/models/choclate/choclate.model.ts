export interface Choclate {
  id: string;
  name: string;
  brand: string;
  currency: string;
  image: string
  prices: {
    price: number;
    shop: string;
    link: string;
    unit: string;
    amount: number;
  }[];
  nutrition: {
    fat: {
      total: number;
      saturated: number;
    };
    carbohydrates: {
      total: number;
      sugar: number;
    };
    protein: number;
    salt: number;
  };
}

export interface ChoclatePrice {
  price: number;
  shop: string;
  link: string;
  unit: string;
  amount: number;
}

export interface ChoclateNutrition {
  fat: {
    total: number;
    saturated: number;
  };
  carbohydrates: {
    total: number;
    sugar: number;
  };
  protein: number;
  salt: number;
}

export class ChoclateData {
  id: string;
  name: string;
  brand: string;
  currency: string;
  image: string;
  prices: ChoclatePrice[];
  nutrition: ChoclateNutrition;

  constructor(choclate: Choclate) {
    this.id = choclate.id;
    this.name = choclate.name;
    this.brand = choclate.brand;
    this.image = choclate.image
    this.prices = choclate.prices;
    this.currency = choclate.currency;
    this.nutrition = choclate.nutrition;
  }
}
