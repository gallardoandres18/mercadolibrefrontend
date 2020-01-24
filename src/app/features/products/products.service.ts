import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from './products.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getListOfProducts( name: string ):  Observable<Product[]> {
    const url = `${environment.apiUrl}/search?q=${name}`;
    return this.httpClient.get<Product[]>(url)
      .pipe(
        map((response: any) => {
          return response.results.slice(0, 4);
        })
      );
  } 
}
