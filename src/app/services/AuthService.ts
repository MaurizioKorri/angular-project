import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.endpoint;
  sessionCustomer: Customer = new Customer;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}



  createSessionCustomer(customer: Customer){

    this.sessionCustomer.firstName = customer.firstName;
    this.sessionCustomer.lastName = customer.lastName;
    this.sessionCustomer.email = customer.email;
    this.sessionCustomer.cc = customer.cc;

  }


  signUp(customer: any){
    return this.http.post<Customer>(this.baseUrl + '/api/customers/' + 'signup' , customer);
  }


  signIn(customer: any){
    return this.http.post<Customer>(this.baseUrl + '/api/customers/' + 'signin' , customer);
  }


}






