import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product, SearchList } from '../products.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  searchList: SearchList[];
  loading = true;
  withoutResults = false;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        const { search } = params;
        if (search) {
          this.loading = true;
          this.withoutResults = false;
          this.productsService.getListOfProducts(search)
            .subscribe((searchList: SearchList[]) => {
              this.searchList = searchList;
              this.loading = false;
            }, () => {
              this.withoutResults = true;
              this.loading = false;
            })
        }
      });
  }

}
