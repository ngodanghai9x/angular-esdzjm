import { Component, OnChanges, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit, OnChanges {
  constructor(private cartService: CartService) {}

  shippingCosts!: Observable<{ type: string; price: number }[]>;

  ngOnChanges() {
    console.log(ShippingComponent.name, 'ngOnChanges');
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
  
}
