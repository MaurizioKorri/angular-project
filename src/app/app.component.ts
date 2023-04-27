import { ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { Product } from './models/Product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Coffee Express';


  constructor(){}


  userInLocalStorage(){

    if(localStorage.getItem('customer') != null) return true;

    else return false;

  }


}
