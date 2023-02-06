import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = environment.endpoint;


  constructor(private http: HttpClient) {}


  getCustomersList(): Observable<Customer[]>{
      return this.http.get<Customer[]>(this.baseUrl + '/api/customers/');
  }

  getCustomerById(customerIdFromRoute: number): Observable<Customer> {
      return this.http.get<Customer>(this.baseUrl + '/api/customers/' + customerIdFromRoute);
  }


  private customer$ = new BehaviorSubject<any>({});
  selectedCustomer$ = this.customer$.asObservable();

  setCustomer(customer: any) {      
    console.log("[CustomerService] selectedCustomer", customer);
    setTimeout((customer: Customer) => {
      this.customer$.next(customer);
    }, 0, customer)
  }
}
