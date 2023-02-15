import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})


export class ProductService {

  private baseUrl = environment.endpoint;

  constructor(private http: HttpClient) { }



  getProductsList(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + '/api/products/');
  }
}
