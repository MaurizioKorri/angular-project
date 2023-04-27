import { ShoppingCart } from './../../models/ShoppingCart';
import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Customer } from 'src/app/models/customer';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  loggedIn: boolean = false;
  products: Product[] = [];
  selectedProduct: Product = new Product();
  selectedProductQuantity: number = 1;
  shoppingCart: ShoppingCart = new ShoppingCart();

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService){}


  ngOnInit(){
    if(localStorage.getItem('customer') != null) this.loggedIn = true;

    this.productService.getProductsList().subscribe(
      (data: Product[]) => {
        console.log('siamo dentro alla getCustomersList subscribe');
        console.log(data);
        data.forEach( (product) => {
          this.products.push(product);
        })
      }
    )
  }

  addToShoppingCart(product: Product){
    if(this.loggedIn){

      const sessionCustomer: Customer = JSON.parse(window.localStorage.getItem('customer') || '{}');

      this.shoppingCart.setProduct(product);
      this.shoppingCart.setCustomer(sessionCustomer);
      this.shoppingCart.setQuantity(this.selectedProductQuantity);

      this.shoppingCartService.putInShoppingCart(this.shoppingCart);

    }
    this.selectedProductQuantity = 1;
  }

  increaseQuantity(){
    this.selectedProductQuantity++;
  }

  decreaseQuantity(){
    if(this.selectedProductQuantity>1){
      this.selectedProductQuantity--;
    }
  }

  selectProduct(product: Product){
    this.selectedProduct = product;
  }



}
