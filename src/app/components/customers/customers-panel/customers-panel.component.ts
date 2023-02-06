import { CustomerService } from 'src/app/services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customers-panel',
  templateUrl: './customers-panel.component.html',
  styleUrls: ['./customers-panel.component.css']
})
export class CustomersPanelComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer: Customer = {} as Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    this.customerService.getCustomersList().subscribe(
      //fare la subscribe significa gestire l'evento  nel momento in cui arrivano i valori
      //mi attacco all'observable, quando arrivano i dati arrivano puliti, quindi arriva una Customer[]
      (data: Customer[]) => {
        console.log('[CustomerPanel] this.customerService.getCustomersList()');
        console.log(data);
        //var customer: Customer = new Customer();
        data.forEach( (customer) => {
          this.customers.push(customer);

        })

      }
    )
  }

  onCustomerSelected(event: Customer){
    console.log("onCustomerSelected ", event);
    this.selectedCustomer = event;
  }

}
