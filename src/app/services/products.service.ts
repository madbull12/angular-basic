import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService ) {}

  getProducts = (url:string):Observable<Product[]> => {
    return this.apiService.getMany(url);
  }

    // Adding a product via the API
    addProduct = (url: string, body: any): Observable<any> => {
      return this.apiService.post(url, body);
    };
  
    // Editing a product via the API
    editProduct = (url: string, body: any): Observable<any> => {
      return this.apiService.put(url, body);
    };
  
    // Deleting a product via the API
    deleteProduct = (url: string): Observable<any> => {
      return this.apiService.delete(url);
    };
}
