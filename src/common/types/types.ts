export type Product = {
    creationDateTime: string; 
    deleted: boolean;
    id: string;
    isDiscount: boolean;
    isEndless: boolean;
    isPopular: boolean;
    lengthInDays: number;
    name: string;
    nonDiscountId: string | null;
    ownerId: string;
    price: number;
    statusId: string | null;
  }