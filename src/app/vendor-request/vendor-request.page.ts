import { Component, OnInit, ViewChild} from '@angular/core';
import { ToastController, LoadingController, AlertController, IonContent } from '@ionic/angular';
import * as $ from 'jquery';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-vendor-request',
  templateUrl: './vendor-request.page.html',
  styleUrls: ['./vendor-request.page.scss'],
})
export class VendorRequestPage implements OnInit {
@ViewChild(IonContent) content: IonContent;

data:any = {};
all_categories:any;
all_countries:any;
selected_categories:any = [];
checked_categories:any = [];
loading:any;
  constructor(public userService: UserService,public toastController:ToastController, public loadingController:LoadingController, public alertController: AlertController) { }

  ionViewDidEnter(){
    this.getCategories();
    this.getCountries();
  }

  ngOnInit() {
  	$(document).ready(function () {
        var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

        allWells.hide();

        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                $item = $(this);

            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('btn-success').addClass('btn-default');
                $item.addClass('btn-success');
                allWells.hide();
                $target.show();
                $target.find('input:eq(0)').focus();
            }
        });

        allNextBtn.click(function () {
            $(".error_span").remove();
            var curStep = $(this).closest(".setup-content"),
                curStepBtn = curStep.attr("id"),
                nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
                curInputs = curStep.find(".required"),
                isValid = true;

            $(".form-group").removeClass("has-error");
            for (var i = 0; i < curInputs.length; i++) {
                if (curInputs[i].value == '' || curInputs[i].value == undefined || curInputs[i].value == null) {
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                }
            }
            $(".has-error").append('<span style="color:red;" class="error_span">This field is required.</span>');

            if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
        });
        //this.content.scrollToTop(1500);
        $('div.setup-panel div a.btn-success').trigger('click');
    });
  }

  getCategories(){
    this.userService.getData('getCategories').subscribe((result) => {
      this.all_categories = result.categories;
    },
    err => {
      this.all_categories = [];
    });
  }

  getCountries(){
    this.userService.getData('all_countries').subscribe((result) => {
      this.all_countries = result.countries;
    },
    err => {
      this.all_countries = [];
    });
  }

  catChanged(event,cat_id,subcat_id){
    if(event.target.checked == true){
        if(this.checked_categories.indexOf(cat_id) >= 0){
            var index = this.checked_categories.indexOf(cat_id);
            this.selected_categories[index]['subcats'].push(subcat_id);
        }
        else{
            this.checked_categories.push(cat_id);
            var sub_arr = [];
            sub_arr.push(subcat_id);
            this.selected_categories.push({cat_id: cat_id, subcats: sub_arr});
        }
    }
    else{
        var index = this.checked_categories.indexOf(cat_id);
        this.selected_categories[index]['subcats'].splice(this.selected_categories[index]['subcats'].indexOf(subcat_id),1);
        if(this.selected_categories[index]['subcats'].length == 0){
            this.checked_categories.splice(index,1);
            this.selected_categories.splice(index,1);
        }
    }
  }

  finalSubmit(){
    this.data['categories'] = this.selected_categories;
    console.log(this.data)

    let dict = {
      address1: this.data.address1,
      address2: this.data.address2 == undefined ? ' ' : this.data.address2,
      annual_turnover: this.data.annual_turnover,
      categories: this.data.categories,
      checkbox_option: this.data.checkbox_option,
      city: this.data.city,
      company: this.data.company,
      country: this.data.country,
      country_code: this.data.country_code,
      email: this.data.email,
      gst_number: this.data.gst_number,
      fname: this.data.name.split(' ').length > 1 ? this.data.name.split(' ')[0] : this.data.name,
      lname: this.data.name.split(' ').length > 1 ? this.data.name.split(' ')[1] : ' ',
      pan: this.data.pan,
      password: this.data.password,
      phone: this.data.phone,
      pincode: this.data.pincode,
      product_sell: this.data.product_sell,
      sell_in_other_webs: this.data.sell_in_other_webs == 'no' ? 0 : 1,
      state: this.data.state,
      store_name: this.data.store_name,
      tax_detail: this.data.tax_detail,
      products_sell: this.data.product_sell
    };
    
    this.presentLoading();
    this.userService.postData(dict, 'sellOnSiniyetu').subscribe((result) => {
        this.stopLoading();
        if(result.status == 1){
            $("#step_form").hide();
            $("#success_div").show();
            this.presentToast('Your request has been submitted successfully. We will be get in touch with you as soon as possible.','success');
        }else if(result.status == 2){
            //$("#step_form").hide();
            //$("#success_div").show();
            this.presentToast('Email address already exist.','danger');
        }
        else{
          this.presentToast('Error,Please try after some time.','danger');
        }
    },
        err => {
        this.stopLoading();
        this.presentToast('Error,Please try after some time.','danger');
    });
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
