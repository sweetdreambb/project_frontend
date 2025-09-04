export interface TransactionDto {
  tid:      number;
  buyerUid: number;
  datetime: string;
  status:   string;
  total:    number;
  items:    Item[];
}

export interface Item {
  tpid:               number;
  productResponseDto: ProductResponseDto;
  quantity:           number;
  subtotal:           number;
}

export interface ProductResponseDto {
  pid:         number;
  name:        string;
  description: string;
  imageUrl:    string;
  price:       number;
  stock:       number;
}
