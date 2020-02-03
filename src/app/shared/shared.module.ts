import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { PriceProductPipe } from './pipes/price-product.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    PriceProductPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    PriceProductPipe
  ],
  providers: [
    DecimalPipe
  ]
})
export class SharedModule { }
