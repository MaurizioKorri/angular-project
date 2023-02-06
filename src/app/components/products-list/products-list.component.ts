import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/address.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
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
