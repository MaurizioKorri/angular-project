import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/address.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  products: Product[] = [];


  constructor(private productService: ProductService){

  }
  
  ngOnInit(){
    this.productService.getProductsList().subscribe(
      (data: Product[]) => {
        console.log('siamo dentro alla getCustomersList subscribe');
        console.log(data);
        data.forEach( (product) => {
          this.products.push(product);

        })

      }
    )
    console.log("debug", this.products)
}

}
