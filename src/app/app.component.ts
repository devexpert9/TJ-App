import { Component } from '@angular/core';

import { Platform, ToastController, Events, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { config } from './config';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
showHeader:Boolean;
noHeaderURLs:any;
isLoggedIn:Boolean;
user_name:any;
user_image:any;
IMAGES_URL:any;
afterLoginPages:any;
errors : any = ['',null,undefined];
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
      requireLogin: false
    },
	  {
      title: 'Shop By Category',
      url: '/shop-category',
      icon: 'cart',
      requireLogin: false
    },
    {
      title: 'My Account',
      url: '/your-account',
      icon: 'person',
      requireLogin: true
    },
    {
      title: 'My Wishlist',
      url: '/wishlist',
      icon: 'heart',
      requireLogin: true
    },
	{
      title: 'My Cart',
      url: '/cart',
      icon: 'cart',
      requireLogin: true
    },
	{
      title: 'Order History',
      url: '/order-history',
      icon: 'document',
      requireLogin: true
    },
      {
      title: 'Returns Replacement',
      url: '/returns-replacement',
      icon: 'git-compare',
      requireLogin: false
    },
    {
      title: 'Sell On Siniyetu',
      url: '/sell-on-siniyetu',
      icon: 'wallet',
      requireLogin: false
    },
    {
      title: 'Product Compare',
      url: '/product-compare',
      icon: 'cart',
      requireLogin: false
    },
	    {
      title: 'Messages',
      url: '/user-contacts',
      icon: 'person',
      requireLogin: true
    },

    {
      title: 'Blog',
      url: '/blog',
      icon: 'document',
      requireLogin: false
    },
	{
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call',
      requireLogin: false
    },
	{
      title: 'FAQ',
      url: '/faq',
      icon: 'list',
      requireLogin: false
    },
    {
      title: 'Privacy Policy',
      url: '/privacy-policy',
      icon: 'albums',
      requireLogin: false
    },
    {
      title: 'Terms Conditions',
      url: '/terms-conditions',
      icon: 'albums',
      requireLogin: false
    }
  ];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, public toastController: ToastController, private router: Router, public events: Events, public menuCtrl: MenuController) {
     

      this.initializeApp();
      this.IMAGES_URL = config.IMAGES_URL;
      this.noHeaderURLs = ['/login','/register','/forgotpassword', '/authentication-otp', '/reset-password'];
      this.afterLoginPages = ['/your-account','/order-history','/checkout/direct','/notification','/wishlist-checkout'];
      if(this.platform.is('desktop')){
        localStorage.setItem('isBrowser','true');
      }
      else{
        localStorage.setItem('isBrowser','false');
      }
      this.checkLogin();

      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
          if(this.noHeaderURLs.indexOf(event.url) >= 0){
            this.showHeader = false;
          }
          else{
            this.showHeader = true;
          }

          if(this.afterLoginPages.indexOf(event.url) >= 0 && this.isLoggedIn == false && event.url != '/login'){
              this.router.navigate(['/login']);
          }
          document.body.scrollTop = document.documentElement.scrollTop = 0;
      });

      events.subscribe('call_logout_head:true', data => {
        this.checkLogin();
      });

      events.subscribe('user_logged_in:true', data => {
        this.user_name = data.name;
        this.user_image = data.profile_picture;
        this.checkLogin();
      });

      if(localStorage.getItem('guestUserId') == undefined || localStorage.getItem('guestUserId') == 'undefined'){
        localStorage.setItem('guestUserId', String(Math.floor(Math.random() * 100000000)));
      }
      
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      // let status bar overlay webview
      //this.statusBar.overlaysWebView(true);
     
      // set status bar to white
      this.statusBar.backgroundColorByHexString('#a01616');

      this.splashScreen.hide();
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('call_logout_head:true');
    this.events.unsubscribe('user_logged_in:true');
  }

  ionViewWillLoad(){
    alert('hjchgj')
     if(localStorage.getItem('comeFrom') == 'register')
      {
        this.router.navigate(['/interest']);
      }
  }

  checkLogin(){
    var token = localStorage.getItem('sin_auth_token');
    if(this.errors.indexOf(token) == -1){
      this.isLoggedIn = true;
      var self = this;
      setTimeout(function(){
        self.user_name = localStorage.getItem('sin_auth_user_name');
        self.user_image = localStorage.getItem('sin_auth_user_image');
      },1000);
    }
    else{
      this.isLoggedIn = false;
    }
  }

  login(){
    this.menuCtrl.close();
    this.router.navigate(['/login']);
  }

  logout(){
    this.menuCtrl.close();
    localStorage.removeItem('sin_auth_token');
    this.presentToast('Logged out successfully!','success');
    this.checkLogin();
    this.events.publish('call_logout:true', '');
    this.router.navigate(['/home']);
  }

  async presentToast(message,color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: color,
      showCloseButton: true
    });
    toast.present();
  }
}
