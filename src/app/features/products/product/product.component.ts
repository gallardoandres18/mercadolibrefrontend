import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate([`./items/${this.product.id}`])
  }

}
