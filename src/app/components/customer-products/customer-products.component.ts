import { CustomerService } from 'src/app/services/Customer.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShoppingCart } from 'src/app/models/ShoppingCart';

@Component({
  selector: 'app-customer-products',
  templateUrl: './customer-products.component.html',
  styleUrls: ['./customer-products.component.css']
})
export class CustomerProductsComponent {


  shoppingCart: any = [];
  keys: string[];


  constructor(private customerService: CustomerService){}


  ngOnInit(){

    let sessionCustomer = JSON.parse(window.localStorage.getItem('customer') || '{}');

    this.customerService.getCustomerProducts(sessionCustomer.id).subscribe(
      (data: any[]) => {

        this.shoppingCart = data;
        this.keys = Object.keys(data);
        console.log(this.shoppingCart)
        console.log(data);

      });
    }









}
