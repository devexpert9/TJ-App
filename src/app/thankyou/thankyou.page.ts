import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {
  public buttonClickeddrop: boolean = false;
  order:any;
  loading:any;
  order_id:any;
  errors : any = ['',null,undefined];
  trasacId:any=localStorage.getItem('transaction_id');
  constructor(public activatedRoute:ActivatedRoute, public loadingController: LoadingController, public userService: UserService) {
  }
 
  ionViewDidEnter()
  {
    this.presentLoading();
    this.trasacId = localStorage.getItem('transaction_id');
    this.order_id = this.activatedRoute.snapshot.paramMap.get('order_id');
    // this.getOrderDetails();

    this.userService.postData({order_id:this.order_id},'getOrderDetails').subscribe((result) => {
      console.log(result)
      this.order = result.orders;
      if(typeof(result.orders.order_products_data) == 'string'){
        this.order.order_products_data = JSON.parse(result.orders.order_products_data);
      }

      for(let i=0; i < result.orders.order_products_data.length; i++){
        if(typeof(this.order.order_products_data[i].product_variations) == 'string'){
          this.order.order_products_data[i].product_variations = JSON.parse(this.order.order_products_data[i].product_variations);
        }
      }
      console.log(this.order)
      if(typeof(this.order.total_amount) == "string" ){
        this.order.total_amount = Number(this.order.total_amount);
      }
      this.stopLoading();
    },
    err => {
      this.stopLoading();
      this.order = [];
    });
  }

  ngOnInit() {
  }

  public onButtonClickdrop() {
    this.buttonClickeddrop = !this.buttonClickeddrop;
  }

  subtotalPrice(item){
    if(item.is_variation == 1){
      return Number(item.product_price);
    }else if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products) && this.errors.indexOf(item.wholesale_products) == -1){
      return item.wholesale_price;
    }else{
      if(this.errors.indexOf(item.product_sale_price) == -1 && item.product_sale_price != item.product_purchase_price){
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return (Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 )).toFixed(2);
          }else{
            return (Number(item.product_sale_price) - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_sale_price;
        }
      }
      else{
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return (Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 )).toFixed(2);
          }else{
            return (Number(item.product_purchase_price) - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_purchase_price;
        }
      }
    }
  };

  getOrderDetails()
  {
    this.presentLoading();
    
  }

  async presentLoading() {
    this.loading = await this.loadingController.create();
    await this.loading.present();
  }

  async stopLoading() {
    if(this.loading != undefined){
      await this.loading.dismiss();
    }
    else{
      var self = this;
      setTimeout(function(){
        self.stopLoading();
      },1000);
    }
  }
}
