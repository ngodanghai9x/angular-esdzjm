import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  /* 
    ngOnChanges: Khi component có thay đổi về Input, Output
    ngOnChanges được gọi khi component phát hiện có giá trị được binding vào component bằng phương pháp Input properties. 
    Để nhận biết được giá trị binding thì ngOnChange quản lý đối tượng SimpleChange. 
  */
  @Output() notify = new EventEmitter();

  ngOnChanges() {
    console.log(ProductAlertsComponent.name, 'ngOnChanges');
  }

  ngOnInit(): void {}
}
