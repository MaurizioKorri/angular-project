import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = environment.endpoint;

  constructor(private http: HttpClient) { }



  getAddressList(): Observable<Address[]>{
    return this.http.get<Address[]>(this.baseUrl + '/api/addresses/');
  }
}
