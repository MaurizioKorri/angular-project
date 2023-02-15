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

  constructor(private http: HttpClient) {}



  signUp(body: {}){
    return this.http.post<Customer>(this.baseUrl + '/api/customers/' , body);
  }


  signIn(body: {}){
    return this.http.get<Customer>(this.baseUrl + '/api/customers/' , body);
  }

  /*signIn(customerIdFromRoute: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + '/api/customers/' + customerIdFromRoute);
  }*/

}






