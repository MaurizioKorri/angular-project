import { Address } from './address';
export class Customer {
    id: number;
    firstName: String;
    lastName: String;
    cc: String;
    active: boolean;
    addressList: Address[];
    productList: any
  }
