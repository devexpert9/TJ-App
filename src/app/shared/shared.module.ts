import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterPage } from '../footer/footer.page';
import { RecentlyViewedPage } from '../recently-viewed/recently-viewed.page';
import { UpsellProductsPage } from '../upsell-products/upsell-products.page';
import { FeaturedProductsPage } from '../featured-products/featured-products.page';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from 'time-ago-pipe';
import { OwlModule } from 'ngx-owl-carousel';
import { FormsModule } from '@angular/forms';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  imports: [
  	CommonModule,
  	IonicModule.forRoot(),
  	RouterModule,
  	OwlModule,
  	FormsModule,
  	NgxStarsModule,
  ],
  declarations: [
  	 FooterPage, RecentlyViewedPage, UpsellProductsPage, FeaturedProductsPage, TimeAgoPipe
  ],
  exports: [
     FooterPage, RecentlyViewedPage, UpsellProductsPage, FeaturedProductsPage, TimeAgoPipe
  ]
})

export class SharedModule { }
 