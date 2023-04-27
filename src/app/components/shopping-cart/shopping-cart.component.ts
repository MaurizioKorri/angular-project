import { Address } from './../../models/address';
import { ShoppingCart } from './../../models/ShoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { AddressService } from 'src/app/services/Address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {


  shoppingCart: any = [];
  keys: string[];

  arraySize: number = 0;
  totalPrice: number = 0;
  totalItemAmount: number = 0;

  addresses: any = [];


  constructor(private shoppingCartService: ShoppingCartService, private addressService: AddressService, private router: Router){


  }

  ngOnInit(){

    let sessionCustomer = JSON.parse(window.localStorage.getItem('customer') || '{}');

    this.shoppingCartService.getCustomerShoppingCart(sessionCustomer.id).subscribe(

      (data: ShoppingCart[]) => {

        this.shoppingCart = data;
        this.keys = Object.keys(data);
        this.arraySize = this.shoppingCart.length;

        this.totalItemAmount = this.getItemsAmount(data);
        this.totalPrice = this.getShoppingCartSum(data);

        console.log('Current customers shopping cart ->', data);
        console.log("this.shoppingcart ->", this.shoppingCart);


      })

    this.addressService.getCustomerAddresses(sessionCustomer.id).subscribe(
      (data: Address[]) => {
        this.addresses = data;
        console.log(this.addresses);
      }
    )


  }

  public getShoppingCartSum(data: ShoppingCart[]): number{

    let sum: number = 0;

    data.forEach(element => {
      sum = sum + element.product.productPrice * element.quantity;
    });

    return sum;
  }

  public getItemsAmount(data: ShoppingCart[]): number{
    let sum: number = 0;
    data.forEach(element => {

      sum = sum + element.quantity;

    });
    return sum;
  }



  public deleteShoppingCartItem(shoppingCartItem: ShoppingCart){
    console.log(shoppingCartItem.id);
    this.shoppingCartService.deleteShoppingCartItem(shoppingCartItem.id);
    window.location.reload();
  }

  public confirmPurchase(){

    console.log("confirmed")

    let sessionCustomer = JSON.parse(window.localStorage.getItem('customer') || '{}');
    console.log("confirmed")

    this.shoppingCartService.addToBoughtProducts(sessionCustomer.id);
    console.log("confirmed")
    this.router.navigateByUrl('');


  }



}
