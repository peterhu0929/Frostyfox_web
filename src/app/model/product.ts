export class Product implements IProduct {
  ID: number;
  NAME: string;
  TYPE: string;
  PRICE: number;
  SWEETNESS: boolean;
}

export interface IProduct {
  ID: number;
  NAME: string;
  TYPE: string;
  PRICE: number;
  SWEETNESS: boolean;
}
