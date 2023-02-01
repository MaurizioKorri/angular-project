import { CustomerService } from 'src/app/services/customer.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  @Input()//binda la variabile con il componente padre
  customer: Customer = new Customer();


  /* {
    "id": 3,
    "firstName": "Maria",
    "lastName": "Turcotte",
    "cc": "0376104459",
    "active": false,
    "addresses": [
        {
            "id": 3,
            "city": "Milano",
            "streetAddress": "via dell'incoronata 100",
            "zipcode": "10100",
            "country": "IT",
            "addressType": "domicilio"
        }
    ],
    "boughtProducts": [
        {
            "id": 2,
            "productName": "Asciugacapelli",
            "productDescr": "Nessuna",
            "productPrice": 49.9,
            "productWeight": 0.5
        },
        {
            "id": 1,
            "productName": "Cellulare Samsung",
            "productDescr": "Nessuna",
            "productPrice": 499,
            "productWeight": 0.29
        },
        {
            "id": 3,
            "productName": "Mollette da bucato",
            "productDescr": "Oggetto bellissimo",
            "productPrice": 5.99,
            "productWeight": 0.1
        }
    ]
}*/

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const customerIdFromRoute = Number(routeParams.get('customerId'));

    if(customerIdFromRoute > 0 ){

      console.log("Viewing Customer with ID: " + customerIdFromRoute);

      this.customerService.getCustomerById(customerIdFromRoute).subscribe(
        (customer: Customer) => {
          console.log("this.customerService.getCustomerById()");
          console.log(customer);

          this.customer = customer;
        }
      );
    }
  }

}
