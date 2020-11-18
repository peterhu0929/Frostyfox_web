import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  constructor(
    private http: HttpClient
  ) { }
  public productData: any;

  getProduct(): Observable<any> {
    const URL = environment.jsonserver + 'products';
    return this.http.get<any>(URL);
  }
  addProduct(productData): Observable<any> {
    const URL = environment.jsonserver + 'products';
    return this.http.post<any>(URL, productData);
  }
  updateProduct(productData): Observable<any> {
    const URL = environment.jsonserver + 'products';
    return this.http.post<any>(URL, productData);
  }
  delProduct(productId): Observable<any> {
    const URL = `${environment.jsonserver}products/${productId}`;
    return this.http.delete<any>(URL, productId);
  }
}
