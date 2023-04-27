import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private baseUrl = environment.endpoint;

  constructor(private http: HttpClient) { }

  getProductsList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + '/api/products/');
  }

  /*putInShoppingCart(product: Product, customer: Customer, quantity: number){

    class ShoppingCartHolder{
      product: any;
      customer: any;
      quantity: number;


      constructor(product: any, customer: any, quantity: number){
        this.product = product;
        this.customer = customer;
        this.quantity = quantity;
      }
    }

    const holder = new ShoppingCartHolder(product, customer, quantity);

    console.log("shopping object cart in service, customer -> ", holder.customer);
    console.log("shopping object cart in service, product -> ", holder.product);
    console.log("shopping object cart in service, quantity -> ", holder.quantity);

    return this.http.post<ShoppingCartHolder>(this.baseUrl + '/api/shoppingcart/', holder);
  }*/


}
