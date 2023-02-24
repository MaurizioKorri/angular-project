
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  @ViewChild('suform') suform: NgForm;

  constructor(private authService: AuthService) { }

  onSubmit(form: NgForm){

    console.log('form data -> ', form);

    let customer: Customer = new Customer();

    customer.firstName = form.value.firstName;
    customer.lastName = form.value.lastName;
    customer.email = form.value.email;
    customer.password = form.value.password;
    customer.cc = form.value.cc;


    this.authService.signUp(customer).subscribe(
      data => {
        console.log('return of signUp method -> ', data);

        this.authService.createSessionCustomer(data);

        console.log('session customer -> ', this.authService.sessionCustomer);

        localStorage.setItem('customer', (JSON).stringify(this.authService.sessionCustomer));


      }
    );
  }

}
