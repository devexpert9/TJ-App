import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
order:any;
total_payable_price: any = 0;
total_coupon_amount: any = 0;
grand_total: any = 0;
errors : any = ['',null,undefined];
  constructor(public navParams: NavParams, private modalCtrl:ModalController) {
  	this.order = navParams.get('order');
    if(typeof(this.order.order_products_data) == 'string'){
      if(this.order.coupon_data != ''){
        this.order.coupon_data = JSON.parse(this.order.coupon_data);
      }

      this.order.order_products_data = JSON.parse(this.order.order_products_data);
      for(let i=0; i< this.order.order_products_data.length; i++){
        if(typeof(this.order.order_products_data[i].product_variations) == 'string'){
          this.order.order_products_data[i].product_variations = JSON.parse(this.order.order_products_data[i].product_variations);
        }
      }
      this.order.total_amount = Number(this.order.total_amount);
    }

    this.subtototalOrder(this.order.order_products_data);

  }

  ngOnInit() {
  }

  closeModal(){
  	this.modalCtrl.dismiss();
  }

  subtotalPrice(item){
    console.log(item)
    if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products)){
      return item.wholesale_price;
    }else{
      if(item.product_sale_price != item.product_purchase_price){
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            let price = (item.product_sale_price - ((Number(item.discount_per_piece) / item.product_sale_price) * 100 )).toFixed(2);
            console.log(price);
            return price;
          }else{
            return (item.product_sale_price - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_sale_price;
        }
      }
      else{
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return (item.product_purchase_price - ((Number(item.discount_per_piece) / item.product_purchase_price) * 100 )).toFixed(2);
          }else{
            return (item.product_purchase_price - Number(item.discount_per_piece)).toFixed(2);
          }
        }else{
          return item.product_purchase_price;
        }
      }
    }
  };

  grandTotalPrice(item){
    if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products)){
      return item.wholesale_price * item.product_quantity;
    }else if(item.is_variation == 1){
      return Number(item.product_price) * item.product_quantity;
    }else{
      if(item.product_sale_price != item.product_purchase_price){

        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return ((item.product_sale_price - ((Number(item.discount_per_piece) / item.product_sale_price) * 100 )) * item.product_quantity).toFixed(2);
          }else{
            return ((item.product_sale_price - Number(item.discount_per_piece)) * item.product_quantity).toFixed(2);
          }
        }else{
          return item.product_sale_price * item.product_quantity;
        }
      }
      else{
        if(item.discount_per_piece != null){
          if(item.discount_type == '%'){
            return ((item.product_purchase_price - ((Number(item.discount_per_piece) / item.product_purchase_price) * 100 )) * item.product_quantity).toFixed(2);
          }else{
            return ((item.product_purchase_price - Number(item.discount_per_piece)) * item.product_quantity).toFixed(2);
          }
        }else{
          return item.product_purchase_price * item.product_quantity;
        }
      }
    }
  };

  subtototalOrder(products){
    var self = this;
    this.total_payable_price = 0;
    this.grand_total = 0;
    if(products.length > 0){
      products.forEach(function(item){
        if(Number(item.wholesale_price) != 0 && Number(item.product_quantity) >= Number(item.wholesale_products)){
          self.total_payable_price = Number(self.total_payable_price) + (item.wholesale_price*item.product_quantity);
        }else if(item.is_variation == 1){
          self.total_payable_price = Number(self.total_payable_price) + (item.product_price*item.product_quantity);
        }else{
          if(item.product_sale_price != item.product_purchase_price){
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_sale_price) - ((Number(item.discount_per_piece) / Number(item.product_sale_price)) * 100 );
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }else{
                let singleItemPrice = Number(item.product_sale_price) - Number(item.discount_per_piece);
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }
            }else{
              self.total_payable_price = Number(self.total_payable_price) + (item.product_sale_price*item.product_quantity);
            }
          }
          else{
            if(item.discount_per_piece != null){
              if(item.discount_type == '%'){
                let singleItemPrice = Number(item.product_purchase_price) - ((Number(item.discount_per_piece) / Number(item.product_purchase_price)) * 100 );
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }else{
                let singleItemPrice = Number(item.product_purchase_price) - Number(item.discount_per_piece) ;
                self.total_payable_price = Number(self.total_payable_price) + (singleItemPrice*item.product_quantity);
              }
            }else{
              self.total_payable_price = Number(self.total_payable_price) + (item.product_purchase_price*item.product_quantity);
            }

          }
        }
      });
    }
    this.total_payable_price = this.total_payable_price.toFixed(2)
    if(this.order.coupon_data != ''){
      var coupon_amount;
      if(this.order.coupon_data.discount_type == 'Percent'){
        coupon_amount = (this.order.coupon_data.discount_amount/100)*this.total_payable_price;
      }
      else{
        coupon_amount = this.order.coupon_data.discount_amount;
      }
      this.total_coupon_amount = Number(coupon_amount);
      this.grand_total = Number(this.total_payable_price) - Number(coupon_amount);
    }
    else{
      this.grand_total = this.total_payable_price;
    }
  }

}
