import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductDetail } from '../products.models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  loading = true;
  productDetail: ProductDetail;
  withoutResults = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.loading = true;
      this.productsService.getProduct(id)
        .subscribe((productDetail: ProductDetail) => {
          this.productDetail = productDetail;
          this.loading = false;
        }, () => {
          this.withoutResults = true;
          this.loading = false;
        })
    }

  }

}
