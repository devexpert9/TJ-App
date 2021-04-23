import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',  
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogPageModule' },
  { path: 'blog-detail/:blog_id', loadChildren: './blog-detail/blog-detail.module#BlogDetailPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'checkout/:direct', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'order-history', loadChildren: './order-history/order-history.module#OrderHistoryPageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'terms-conditions', loadChildren: './terms-conditions/terms-conditions.module#TermsConditionsPageModule' },
  { path: 'product-compare', loadChildren: './product-compare/product-compare.module#ProductComparePageModule' },
  { path: 'wishlist', loadChildren: './wishlist/wishlist.module#WishlistPageModule' },
  { path: 'returns-replacement', loadChildren: './returns-replacement/returns-replacement.module#ReturnsReplacementPageModule' },
  { path: 'sell-on-siniyetu', loadChildren: './sell-on-siniyetu/sell-on-siniyetu.module#SellOnSiniyetuPageModule' },
  { path: 'thankyou/:order_id', loadChildren: './thankyou/thankyou.module#ThankyouPageModule' },
  { path: 'your-account', loadChildren: './your-account/your-account.module#YourAccountPageModule' },
  { path: 'footer', loadChildren: './footer/footer.module#FooterPageModule' },
  { path: 'product-details/:product_id', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'filters', loadChildren: './filters/filters.module#FiltersPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'messages/:product_id/:vendor_type/:vendor_id', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'user-contacts', loadChildren: './user-contacts/user-contacts.module#UserContactsPageModule' },
  { path: 'shop-category', loadChildren: './shop-category/shop-category.module#ShopCategoryPageModule' },
  { path: 'choose-location', loadChildren: './choose-location/choose-location.module#ChooseLocationPageModule' },
  { path: 'header', loadChildren: './header/header.module#HeaderPageModule' },
  { path: 'recently-viewed', loadChildren: './recently-viewed/recently-viewed.module#RecentlyViewedPageModule' },
  { path: 'upsell-products', loadChildren: './upsell-products/upsell-products.module#UpsellProductsPageModule' },
  { path: 'featured-products', loadChildren: './featured-products/featured-products.module#FeaturedProductsPageModule' },
  { path: 'auto-popup', loadChildren: './auto-popup/auto-popup.module#AutoPopupPageModule' },
  { path: 'vendor-request', loadChildren: './vendor-request/vendor-request.module#VendorRequestPageModule' },
  { path: 'invoice', loadChildren: './invoice/invoice.module#InvoicePageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'sitemap', loadChildren: './sitemap/sitemap.module#SitemapPageModule' },
  { path: 'authentication-otp', loadChildren: './authentication-otp/authentication-otp.module#AuthenticationOtpPageModule' },
  { path: 'reset-password', loadChildren: './reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'wishlist-listing', loadChildren: './wishlist-listing/wishlist-listing.module#WishlistListingPageModule' },
  { path: 'update-wishlist', loadChildren: './update-wishlist/update-wishlist.module#UpdateWishlistPageModule' },
  { path: 'wishlist-checkout', loadChildren: './wishlist-checkout/wishlist-checkout.module#WishlistCheckoutPageModule' },
  { path: 'video-call', loadChildren: './video-call/video-call.module#VideoCallPageModule' },
  { path: 'public-wishlist', loadChildren: './public-wishlist/public-wishlist.module#PublicWishlistPageModule' },
  { path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsPageModule' },
  { path: 'trending', loadChildren: './trending/trending.module#TrendingPageModule' },  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'register-seller', loadChildren: './register-seller/register-seller.module#RegisterSellerPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'follow', loadChildren: './follow/follow.module#FollowPageModule' },
  { path: 'interest', loadChildren: './interest/interest.module#InterestPageModule' },
  { path: 'password-instructions', loadChildren: './password-instructions/password-instructions.module#PasswordInstructionsPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
