import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})




export class CustomersListComponent {

  //@Input()
  customers: Customer[] = [];//dal template io posso accedere alla variabile customers

  @Output() onCustomerSelection: EventEmitter<Customer> = new EventEmitter<Customer>();

  //@ViewChild('customer_details')
  //customerDetailsComponent: CustomerDetailsComponent;

  constructor(private customerService: CustomerService) {  }

  ngOnInit(){
    this.customerService.customersList$.subscribe(
      (data: Customer[]) => {
        this.customers = data;

    });
  }

  viewDetails(customer: Customer): void{
    console.log("viewDetails => ", customer);
    //this.customerService.setCustomer(customer);
    this.onCustomerSelection.emit(customer);
  }

  refreshList() : void{
    this.customerService.refreshList();
  }

  clearList() : void{
    this.customers = [];
  }

  
}
