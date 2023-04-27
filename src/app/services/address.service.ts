import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = environment.endpoint;

  constructor(private http: HttpClient) { }

  public getCustomerAddresses(customerId: number){
    return this.http.post<Address[]>(this.baseUrl + '/api/addresses/get', customerId);
  }

}
