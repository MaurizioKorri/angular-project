
import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-count',
  templateUrl: './customers-count.component.html',
  styleUrls: ['./customers-count.component.css']
})
export class CustomersCountComponent {

  //@Input()
  customers: Customer[] = []

  constructor(private customerService: CustomerService){ }

  ngOnInit() {

    this.customerService.customersList$.subscribe(
      (data: Customer[]) => {
        this.customers = data;

    });
  }

}
