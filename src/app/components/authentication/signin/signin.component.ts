import { Router } from '@angular/router';
import { AuthService } from './../../../services/AuthService';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent {

  customerFound: boolean = true;

  constructor(private authService: AuthService, private router: Router){}


  onSubmit(form: NgForm){

    console.log(form)

    let customer: Customer = new Customer();
    this.customerFound = true;

    customer.email = form.value.email;
    customer.password = form.value.password;

    this.authService.signIn(customer).subscribe(
      (data: Customer) => {


        console.log('signin on submit', data);

        if(data.email!=customer.email){
          console.log("user not existing;")
          this.customerFound = false;
          this.goToHomePage();
          return;
        }

        this.authService.createSessionCustomer(data);

        console.log('session customer -> ', this.authService.sessionCustomer);

        localStorage.setItem('customer', (JSON).stringify(this.authService.sessionCustomer));

        this.authService.isLoggedIn = true;



        this.goToHomePage();


      }
    );
  }

  private goToHomePage(){

    this.router.navigate(['']);

  }



}
