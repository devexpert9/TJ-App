import { NgModule, Directive } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InvoicePage } from './invoice/invoice.page';
import { ChooseLocationPage } from './choose-location/choose-location.page';
import { WishlistListingPage } from './wishlist-listing/wishlist-listing.page';
import { UpdateWishlistPage } from './update-wishlist/update-wishlist.page';
import { AutoPopupPage } from './auto-popup/auto-popup.page';
import { FiltersPage } from './filters/filters.page';
import { VideoCallPage } from './video-call/video-call.page';
import { CustomRequestOptions } from './services/CustomRequestOptions';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider } from "angular-6-social-login";
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Ng4GeoautocompleteModule } from 'ng4-geoautocomplete';
import { PayPal } from '@ionic-native/paypal/ngx';
import { AgmCoreModule } from '@agm/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

import { PasswordInstructionsPage } from './password-instructions/password-instructions.page';
// import { CKEditorModule } from 'ng2-ckeditor';

import { IonicSelectableModule } from 'ionic-selectable';


const config: SocketIoConfig = { url: 'https://siniyetu.tk:8080', options: {} };
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2375309316091367")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("498511959569-hqhf4fm8no3sjn71rpd9g412n635invo.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [AppComponent , ChooseLocationPage ,WishlistListingPage, PasswordInstructionsPage,FiltersPage,  AutoPopupPage, InvoicePage, UpdateWishlistPage, VideoCallPage],
  entryComponents: [ChooseLocationPage ,WishlistListingPage, PasswordInstructionsPage,FiltersPage, AutoPopupPage, InvoicePage, UpdateWishlistPage, VideoCallPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // CKEditorModule,
    IonicSelectableModule,
    SocialLoginModule,
    Ng4GeoautocompleteModule.forRoot(),
    SocketIoModule.forRoot(config),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAIkAmlsGxoP63HLptMlKqpbgAv7IZBKM4',
      libraries: ['places']
    })
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    PayPal,
    SpeechRecognition,
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: RequestOptions, useClass: CustomRequestOptions },
    { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
