import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product, SearchList, ProductDetail } from './products.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getListOfProducts(name: string): Observable<SearchList[]> {
    const url = `${environment.apiUrl}/items?q=${name}`;
    return this.httpClient.get<SearchList[]>(url)
  }

  getProduct(id: string): Observable<ProductDetail> {
    const url = `${environment.apiUrl}/items/${id}`;
    return this.httpClient.get<ProductDetail>(url)
  }

}
