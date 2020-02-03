import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  productText: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchProduct() {
    this.router.navigate(['/items'], { queryParams: { search: this.productText } });
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
