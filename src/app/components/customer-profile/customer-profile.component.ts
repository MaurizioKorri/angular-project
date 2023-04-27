import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {


  sessionCustomer: Customer = JSON.parse(window.localStorage.getItem('customer') || '{}');



  ngOnInit(){
    console.log(this.sessionCustomer);

  }

}
