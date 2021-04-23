import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ToastController, LoadingController, Events } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { config } from '../config';
import { Router } from '@angular/router';
import { GlobalFooService } from '../services/user/globalFooService.service';

import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.page.html',
  styleUrls: ['./interest.page.scss'],
})
export class InterestPage implements OnInit {

	errors : any = ['',null,undefined];
	email:any;
	password:any; 
	loading:any;
	ENC_SALT:any = config.ENC_SALT;
	isBrowser:any = localStorage.getItem('isBrowser');
	categories:any;
	checked:any = [];

	proImage_url: any = 'http://dev.indiit.solutions/TJ/dev/dev/public/uploads/category_images/';
	
  	constructor(private cd: ChangeDetectorRef,private globalFooService: GlobalFooService, public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events, private socialAuthService: AuthService, private fb: Facebook, private googlePlus: GooglePlus)
  	{ 
  	}

  	ngOnInit() {
  	}

  	ionViewDidEnter()
	{
		if(localStorage.getItem('comeFrom') == 'login')
	    {
	      this.router.navigate(['/blog']);
	      return;
	    }

		this.getCategories();
	}

	addCheckbox(event, checkbox : String)
	{ 
		console.log(event);
	    if(event.target.checked)
	    {
	    	let index = this.removeCheckedFromArray(checkbox);
	      this.checked.splice(index,1);
	      
	    }
	    else
	    {
	      this.checked.push(checkbox);
	    }
  	}

	getCategories()
	{
		this.userService.postData({},'getAllCategories').subscribe((result) => {
	  		this.stopLoading();
		  	this.categories = result.data;
		  	this.cd.detectChanges();
		},
		err => {
		  	this.stopLoading();
		  	this.categories = [];
		});
	}

	//Removes checkbox from array when you uncheck it
	removeCheckedFromArray(checkbox : String) {
		return this.checked.findIndex((category)=>{
		  return category === checkbox;
		})
	}

	//Empties array with checkedboxes
	emptyCheckedArray() {
		this.checked = [];
	}

	getCheckedBoxes()
	{
   		console.log(this.checked);
   		this.presentLoading();
   		this.userService.postData({user_id:localStorage.getItem('sin_auth_userId'),data:this.checked},'saveInterest').subscribe((result) => {
   			this.stopLoading();
	  		if(result.status == 1)
	  		{
	  			localStorage.removeItem('comeFrom');
	  			localStorage.setItem('comeFrom','login');
	  			this.router.navigate(['/blog']);
	  		}
	  		else{
	  			this.presentToast('Something went wrong please try after some time.','danger');
				return false;
	  		}
		},
		err => {
		  	this.stopLoading();
		  	this.presentToast('Something went wrong please try after some time.','danger');
			return false;
		});
 	}

	login(cats)
	{
		console.log(cats);
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

  	async presentToast(message,color) {
	    const toast = await this.toastController.create({
	      message: message,
	      duration: 3000,
	      position: 'bottom',
	      color: color,
	      showCloseButton: true
	    });
	    toast.present();
  	}
}
