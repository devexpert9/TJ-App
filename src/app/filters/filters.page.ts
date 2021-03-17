import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {
selectedItem:any = [];
userId:any;
cat_values:any = [];
price_values:any;
searchTerm:any;
sort_by_value:any;
show_count:any;
current_page:any;
all_brands:any;
all_categories:any;
filtered_brands:any = [];
min_price:any = 0;
max_price:any = 10000;
filtered_discount:any = [];
filtered_reviews:any = [];
selected_cats:any = [];
filtered_cats:any = [];
// selected_cats_checked:any = [];
  constructor(private modalCtrl:ModalController, public navParams: NavParams) { 
  	this.all_categories = navParams.get('all_categories');
  	this.all_brands = navParams.get('all_brands');
  	this.userId = navParams.get('userId');
  	this.searchTerm = navParams.get('searchTerm');
  	this.sort_by_value = navParams.get('sort_by_value');
  	this.show_count = navParams.get('show_count');
  	this.current_page = navParams.get('current_page');
  	this.filtered_brands = navParams.get('filtered_brands');
  	this.filtered_discount = navParams.get('filtered_discount');
  	this.selected_cats = navParams.get('selected_cats');
  	this.filtered_cats = navParams.get('filtered_cats');
  	this.min_price = navParams.get('min_price');
  	this.max_price = navParams.get('max_price');
  	console.log(this.selected_cats)
  	var self = this;
  	if(this.selected_cats.length > 0){
  		this.selected_cats.forEach(function(cat){
  			self.selectedItem.push('item'+cat.cat_id);
  			self.cat_values[cat.cat_id] = cat.sub_cat_id;
  		});
  		console.log(this.cat_values)
  	}
  }

  ngOnInit() {
  	this.price_values = {lower: this.min_price, upper: this.max_price};
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  catChecked(event,cat,subcat){
    if(event.detail.checked == true){
      if(this.filtered_cats.indexOf(cat) == -1){
        this.filtered_cats.push(cat);
        var subcat_arr = [];
        subcat_arr.push(subcat);
        this.selected_cats.push({cat_id:cat,sub_cat_id:subcat_arr});
      }
      else{
        var index = this.filtered_cats.indexOf(cat);
        this.selected_cats[index]['sub_cat_id'].push(subcat);
      }
    }
    else{
      var c_index = this.filtered_cats.indexOf(cat);
      if(this.selected_cats[c_index]['sub_cat_id'].length == 1){
        this.filtered_cats.splice(c_index,1);
        this.selected_cats.splice(c_index,1);
      }
      else{
        var sub_index = this.selected_cats[c_index]['sub_cat_id'].indexOf(subcat);
        this.selected_cats[c_index]['sub_cat_id'].splice(sub_index,1);
      }
      
      // if(this.selected_cats_checked.indexOf(subcat) >= 0){
      //   this.selected_cats_checked = [];
      // }
    }
    console.log(this.filtered_cats)
    console.log(this.selected_cats)
    // this.getProducts();
  }

  openClose(item){
    if(this.selectedItem.indexOf(item) == -1){
      this.selectedItem.push(item);
    }
    else{
      this.selectedItem.splice(this.selectedItem.indexOf(item),1);
    }
  }

  brandChecked(event,brand_id){
    if(event.detail.checked == true){
      this.filtered_brands.push(brand_id);
    }
    else{
      this.filtered_brands.splice(this.filtered_brands.indexOf(brand_id),1);
    }
    console.log(this.filtered_brands)
  }

  priceChanged(values){
    this.min_price = values.detail.value.lower;
    this.max_price = values.detail.value.upper;
  }

  discountChecked(event,discount){
    if(event.detail.checked == true){
      this.filtered_discount.push(discount);
    }
    else{
      this.filtered_discount.splice(this.filtered_discount.indexOf(discount),1);
    }
    console.log(this.filtered_discount)
  }

  reviewChecked(event,review){
    if(event.detail.checked == true){
      this.filtered_reviews.push(review);
    }
    else{
      this.filtered_reviews.splice(this.filtered_reviews.indexOf(review),1);
    }
    console.log(this.filtered_reviews)
  }

  callFilter(){
  	var data = {
  		user_id:this.userId,
  		filtered_cats:this.filtered_cats,
  		cats:this.selected_cats,
  		search:this.searchTerm,
  		sort_by:this.sort_by_value,
  		per_page:this.show_count,
  		page:this.current_page,
  		brands:this.filtered_brands,
  		discounts:this.filtered_discount,
  		reviews:this.filtered_reviews,
  		min_price:this.min_price,
  		max_price:this.max_price
  	}
    this.closeModal(data);
  }

  resetFilter(){
  	this.selected_cats = [];
  	this.filtered_cats = [];
  	var data = {
  		user_id:this.userId,
  		cats:[],
  		filtered_cats:[],
  		search:'',
  		sort_by:this.sort_by_value,
  		per_page:this.show_count,
  		page:1,
  		brands:[],
  		discounts:[],
  		reviews:[],
  		min_price:0,
  		max_price:10000
  	}
    this.closeModal(data);
  }
}
