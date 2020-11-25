export class Product implements IProduct {
  id: number;
  name: string;
  type: string;
  price: number;
  sweetness: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  type: string;
  price: number;
  sweetness: boolean;
}
