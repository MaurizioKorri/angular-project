import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})




export class CustomersListComponent {

  customers: Customer[] = [];//dal template io posso accedere alla variabile customers
  selectedCustomer: Customer = new Customer();

  constructor(private customerService: CustomerService) {  }

  //customer: Customer

  ngOnInit(){

    //myObservable.subscribe(myObserver);
    this.customerService.getCustomersList().subscribe(
      //fare la subscribe significa gestire l'evento  nel momento in cui arrivano i valori
      //mi attacco all'observable, quando arrivano i dati arrivano puliti, quindi arriva una Customer[]
      (data: Customer[]) => {
        console.log('siamo dentro alla getCustomersList subscribe');
        console.log(data);
        //var customer: Customer = new Customer();
        data.forEach( (customer) => {
          this.customers.push(customer);

        })

      }
    )
    //console.log("debug")
    //console.log(this.customer)
    console.log("debug", this.customers)

  }



  viewDetails(customer: Customer): void{

    this.selectedCustomer = customer;
    console.log("View details : ",  customer);

  }
}
