import { ShareDialogService } from './../share/share-dialog/share-dialog.service';
import { Product } from './../model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  constructor(
    private http: HttpClient,
    private dialogService: ShareDialogService
  ) { }
  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': environment.localserver,
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Max-Age': '864000'
    })
  };

  getDemoProduct(): Observable<Array<Product>> {
    const URL = environment.localserver + '/demo/GetALL';
    return this.http.get<Array<Product>>(URL, this.httpOptions);
  }
  getProduct(): Observable<Product> {
    const URL = environment.jsonserver + 'products';
    return this.http.get<Product>(URL);
  }
  addProduct(productData): Observable<Product> {
    const URL = environment.localserver + '/demo/AddProduct';
    return this.http.post<Product>(URL, productData, this.httpOptions);
  }
  updateProduct(productData): Observable<Product> {
    const URL = environment.localserver + '/demo/UpdateProduct';
    return this.http.post<Product>(URL, productData, this.httpOptions);
  }
  delProduct(productId): Observable<any> {
    const URL = `${environment.localserver}/demo/DeleteProduct?ProductId=${productId}`;
    return this.http.delete<any>(URL, productId);
  }
  genProductID() {
    var roundID = Math.floor(Math.random() * 100) + 1;
    return roundID;
  }
  HandleError(e: any): void {
    // console.log(e.error.InnerException.InnerException);
    console.log(e.error);
    this.dialogService.openShareDialog(e.error.title);
  }
}
