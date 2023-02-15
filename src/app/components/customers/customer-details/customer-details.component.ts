import { CustomerService } from 'src/app/services/customer.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  /*
    @Input() binda la variabile con il componente padre
    @Input() lets a parent component update data in the child component.
    The @Input() decorator in a child component or directive signifies
    that the property can receive its value from its parent component.
  */

  @Input() customer: Customer = new Customer(); //property decorated with Input()

  //customer!: Customer;

  adrList: Address[] = [];

  constructor(private route: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const customerIdFromRoute = Number(routeParams.get('customerId'));

    if(customerIdFromRoute > 0){

      console.log("Viewing Customer with ID: " + customerIdFromRoute);

      this.customerService.getCustomerById(customerIdFromRoute).subscribe(
        (customer: Customer) => {
          console.log("this.customerService.getCustomerById()");
          console.log(customer);

          this.customer = customer;
          this.adrList = customer.addresses;
          console.log("la adr list selezionata", this.adrList)
        }
      );

    }

    /*this.customerService.selectedCustomer$.subscribe( (data) => {
      console.log("[customerDetails] : selectedCustomer$", data);
      this.customer = data;
    });*/


  }

  

}
