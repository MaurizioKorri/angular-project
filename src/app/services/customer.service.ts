import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private baseUrl = environment.endpoint;

  constructor(private http: HttpClient) {}


  getCustomersList(): Observable<Customer[]>{//tipo di ritorno del metodo
      //vediamo come accedere all'oggetto http

      return this.http.get<Customer[]>(this.baseUrl + '/api/customers/');

  }


  getCustomerById(customerIdFromRoute: number): Observable<Customer> {

      return this.http.get<Customer>(this.baseUrl + '/api/customers/' + customerIdFromRoute);


  }
}
