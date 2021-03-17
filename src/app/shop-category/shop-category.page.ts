import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.page.html',
  styleUrls: ['./shop-category.page.scss'],
})
export class ShopCategoryPage implements OnInit {
selectedItem:any;
public buttonClickeddrop: boolean = false;

  constructor() { }

  ngOnInit() {
  }

    public onButtonClickdrop() {

        this.buttonClickeddrop = !this.buttonClickeddrop;
    }  
}
