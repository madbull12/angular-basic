import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {

  }

  getMany<T>(url:string): Observable<T[]> {
    return this.httpClient.get<T>(url) as Observable<T[]>
  }
}
