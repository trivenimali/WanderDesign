import { Component, OnInit } from '@angular/core';
//import {NavController} from 'ionic-angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  price:any;
  minPrice:1;
  maxPrice:1000;
  minprice1:any;
  maxPrice1:any;

  constructor( ) {
    this.minprice1=this.minPrice;
    this.maxPrice1=this.maxPrice
   }

  ngOnInit() {
  }

  changeValues;
 
  changePrice(price){
    this.minprice1 =price.lower;
    this.maxPrice1= price.upper;
  }

}
