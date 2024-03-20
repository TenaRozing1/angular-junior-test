import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent {
  @Output() min = new EventEmitter<number>();
  @Output() max = new EventEmitter<number>();

  showMin(value: any) {
    console.log(value)
    this.min.emit(parseInt(value.target.value));
  }

  showMax(value: any) {
    console.log(value)
    this.max.emit(parseInt(value.target.value));
  }
}
