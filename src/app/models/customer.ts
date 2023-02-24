import { Product } from 'src/app/models/Product';
import { Address } from './address';


export class Customer {

  id: number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  cc: String;
  active: boolean;
  addresses: Address[];
  boughtProduct: Product[];


  constructor(){}


}

