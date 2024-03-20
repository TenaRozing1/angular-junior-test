import { Component, Input } from '@angular/core';
import { IProduct } from '../model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];
  min = 0;
  max = 999;
  filteredList: IProduct[] = [];

  showMin(value: number) {
    this.min = value;
    this.filteredList = this.products.filter(
      (product) => product.price > this.min && product.price < this.max
    );
  }

  showMax(value: number) {
    this.max = value;
    this.filteredList = this.products.filter(
      (product) => product.price > this.min && product.price < this.max
    );
  }
}
