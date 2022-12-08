import { Component, OnChanges, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  products = products;

  ngOnChanges() {
    console.log(ProductListComponent.name, 'ngOnChanges');
  }
  ngOnInit(): void {
    // setInterval(() => {
    //   console.log('🚀 ~setInterval');
    //   this.products = [...products];
    // }, 2500);
  }

  share(e: any) {
    console.log('🚀 ~ share ~ e', e);
    // window.alert('The product has been shared!');
    console.log('The product has been shared!');
  }

  onNotify(e: any) {
    console.log('🚀 ~ onNotify ~ e', e);
    // window.alert('You will be notified when the product goes on sale');
    console.log('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
