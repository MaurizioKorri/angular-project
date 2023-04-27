import { Customer } from "./customer";
import { Product } from "./Product";

export class ShoppingCart {

  id: number;
  product: Product;
  customer: Customer;
  quantity: number;


  constructor(){}

  setProduct(product: Product): void {
    this.product = product;
  }

  getProduct(): Product {
    return this.product;
  }

  setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  getCustomer(): Customer{
    return this.customer;
  }


  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getId(){
    return this.id; 
  }





}
