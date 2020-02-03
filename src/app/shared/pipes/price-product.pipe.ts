import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'priceProduct'
})
export class PriceProductPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) { }

    transform(value: number): string {
        const minIntegerDigits = 1;
        let minFractionDigits = 2;
        let maxFractionDigits = 2;

        return this.decimalPipe.transform(value, `${minIntegerDigits}.${minFractionDigits}-${maxFractionDigits}`, 'es-AR');

    }

}
