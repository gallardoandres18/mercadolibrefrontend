import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  Product: Product[];

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
    .subscribe(params => {
      const { search } = params;
      if ( search ) {
        this.productsService.getListOfProducts(search)
          .subscribe((Product: Product[]) => {
            this.Product = Product;
            console.log(this.Product);
          })
      }
    });
  }

}
