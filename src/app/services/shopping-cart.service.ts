import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { ShoppingCart } from '../models/ShoppingCart';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  private baseUrl = environment.endpoint;

  constructor(private http: HttpClient) { }

  putInShoppingCart(shoppingCart: ShoppingCart){
    return this.http.post<ShoppingCart>(this.baseUrl + '/api/shoppingcart/', shoppingCart).subscribe(
      (data) =>{
        console.log("Data after post ->", data);
      }
    );
  }

  getCustomerShoppingCart(customer_id: number){
    return this.http.post<ShoppingCart[]>(this.baseUrl + '/api/shoppingcart/customer', customer_id);
  }

  addToBoughtProducts(customer_id: number){
    return this.http.post<void>(this.baseUrl + '/api/customersproducts/add', customer_id).subscribe(
      (data) =>{
        console.log("Data after post ->", data);
      }
    );
  }

  deleteShoppingCartItem(shoppingCartId: number){
    return this.http.post<ShoppingCart>(this.baseUrl + '/api/shoppingcart/remove', shoppingCartId).subscribe(
      (data) =>{
        console.log("Data after post ->", data);
      }
    );

  }
}
