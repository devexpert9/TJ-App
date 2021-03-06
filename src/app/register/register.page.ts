import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController,Events, PopoverController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { config } from '../config';
import { GlobalFooService } from '../services/user/globalFooService.service';
// import { ModalController, PopoverController } from '@ionic/angular';

import { MenuController, ModalController } from "@ionic/angular";
import { PasswordInstructionsPage } from '../password-instructions/password-instructions.page';

import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
errors : any = ['',null,undefined];
loading:any;
name:any;
flag:any;
email:any;
phone:any;
password:any;
showPop:any = 'notshow';
confirm_password:any;

ports:any;
port: Port;

ENC_SALT:any = config.ENC_SALT;
  constructor(public popoverController: PopoverController, public modalController: ModalController, private globalFooService: GlobalFooService, public toastController: ToastController, public userService: UserService, public loadingController: LoadingController, public router: Router, public events: Events) { 
      this.globalFooService.getObservable().subscribe((data) => {
        
        if(data.foo.page == 'registerDone')
        {
          this.router.navigate(['/blog']);
        }
        
      });

      this.ports = [{"name":"Afghanistan - π¦π«","code":"AF","dial_code":"+93"},{"name":"Γland Islands - π¦π½","code":"AX","dial_code":"+358"},{"name":"Albania - π¦π±","code":"AL","dial_code":"+355"},{"name":"Algeria - π©πΏ","code":"DZ","dial_code":"+213"},{"name":"American Samoa - π¦πΈ","code":"AS","dial_code":"+1684"},{"name":"Andorra - π¦π©","code":"AD","dial_code":"+376"},{"name":"Angola - π¦π΄","code":"AO","dial_code":"+244"},{"name":"Anguilla - π¦π?","code":"AI","dial_code":"+1264"},{"name":"Antarctica - π¦πΆ","code":"AQ","dial_code":"+672"},{"name":"Antigua and Barbuda - π¦π¬","code":"AG","dial_code":"+1268"},{"name":"Argentina - π¦π·","code":"AR","dial_code":"+54"},{"name":"Armenia - π¦π²","code":"AM","dial_code":"+374"},{"name":"Aruba - π¦πΌ","code":"AW","dial_code":"+297"},{"name":"Australia - π¦πΊ","code":"AU","dial_code":"+61"},{"name":"Austria - π¦πΉ","code":"AT","dial_code":"+43"},{"name":"Azerbaijan - π¦πΏ","code":"AZ","dial_code":"+994"},{"name":"Bahamas - π§πΈ","code":"BS","dial_code":"+1242"},{"name":"Bahrain - π§π­","code":"BH","dial_code":"+973"},{"name":"Bangladesh - π§π©","code":"BD","dial_code":"+880"},{"name":"Barbados - π§π§","code":"BB","dial_code":"+1246"},{"name":"Belarus - π§πΎ","code":"BY","dial_code":"+375"},{"name":"Belgium - π§πͺ","code":"BE","dial_code":"+32"},{"name":"Belize - π§πΏ","code":"BZ","dial_code":"+501"},{"name":"Benin - π§π―","code":"BJ","dial_code":"+229"},{"name":"Bermuda - π§π²","code":"BM","dial_code":"+1441"},{"name":"Bhutan - π§πΉ","code":"BT","dial_code":"+975"},{"name":"Bolivia, Plurinational State of bolivia - π§π΄","code":"BO","dial_code":"+591"},{"name":"Bosnia and Herzegovina - π§π¦","code":"BA","dial_code":"+387"},{"name":"Botswana - π§πΌ","code":"BW","dial_code":"+267"},{"name":"Bouvet Island - π§π»","code":"BV","dial_code":"+47"},{"name":"Brazil - π§π·","code":"BR","dial_code":"+55"},{"name":"British Indian Ocean Territory - π?π΄","code":"IO","dial_code":"+246"},{"name":"Brunei Darussalam - π§π³","code":"BN","dial_code":"+673"},{"name":"Bulgaria - π§π¬","code":"BG","dial_code":"+359"},{"name":"Burkina Faso - π§π«","code":"BF","dial_code":"+226"},{"name":"Burundi - π§π?","code":"BI","dial_code":"+257"},{"name":"Cambodia - π°π­","code":"KH","dial_code":"+855"},{"name":"Cameroon - π¨π²","code":"CM","dial_code":"+237"},{"name":"Canada - π¨π¦","code":"CA","dial_code":"+1"},{"name":"Cape Verde - π¨π»","code":"CV","dial_code":"+238"},{"name":"Cayman Islands - π°πΎ","code":"KY","dial_code":"+345"},{"name":"Central African Republic - π¨π«","code":"CF","dial_code":"+236"},{"name":"Chad - πΉπ©","code":"TD","dial_code":"+235"},{"name":"Chile - π¨π±","code":"CL","dial_code":"+56"},{"name":"China - π¨π³","code":"CN","dial_code":"+86"},{"name":"Christmas Island - π¨π½","code":"CX","dial_code":"+61"},{"name":"Cocos (Keeling) Islands - π¨π¨","code":"CC","dial_code":"+61"},{"name":"Colombia - π¨π΄","code":"CO","dial_code":"+57"},{"name":"Comoros - π°π²","code":"KM","dial_code":"+269"},{"name":"Congo - π¨π¬","code":"CG","dial_code":"+242"},{"name":"Congo, The Democratic Republic of the Congo - π¨π©","code":"CD","dial_code":"+243"},{"name":"Cook Islands - π¨π°","code":"CK","dial_code":"+682"},{"name":"Costa Rica - π¨π·","code":"CR","dial_code":"+506"},{"name":"Cote d'Ivoire - π¨π?","code":"CI","dial_code":"+225"},{"name":"Croatia - π­π·","code":"HR","dial_code":"+385"},{"name":"Cuba - π¨πΊ","code":"CU","dial_code":"+53"},{"name":"Cyprus - π¨πΎ","code":"CY","dial_code":"+357"},{"name":"Czech Republic - π¨πΏ","code":"CZ","dial_code":"+420"},{"name":"Denmark - π©π°","code":"DK","dial_code":"+45"},{"name":"Djibouti - π©π―","code":"DJ","dial_code":"+253"},{"name":"Dominica - π©π²","code":"DM","dial_code":"+1767"},{"name":"Dominican Republic - π©π΄","code":"DO","dial_code":"+1849"},{"name":"Ecuador - πͺπ¨","code":"EC","dial_code":"+593"},{"name":"Egypt - πͺπ¬","code":"EG","dial_code":"+20"},{"name":"El Salvador - πΈπ»","code":"SV","dial_code":"+503"},{"name":"Equatorial Guinea - π¬πΆ","code":"GQ","dial_code":"+240"},{"name":"Eritrea - πͺπ·","code":"ER","dial_code":"+291"},{"name":"Estonia - πͺπͺ","code":"EE","dial_code":"+372"},{"name":"Ethiopia - πͺπΉ","code":"ET","dial_code":"+251"},{"name":"Falkland Islands (Malvinas) - π«π°","code":"FK","dial_code":"+500"},{"name":"Faroe Islands - π«π΄","code":"FO","dial_code":"+298"},{"name":"Fiji - π«π―","code":"FJ","dial_code":"+679"},{"name":"Finland - π«π?","code":"FI","dial_code":"+358"},{"name":"France - π«π·","code":"FR","dial_code":"+33"},{"name":"French Guiana - π¬π«","code":"GF","dial_code":"+594"},{"name":"French Polynesia - π΅π«","code":"PF","dial_code":"+689"},{"name":"French Southern Territories - πΉπ«","code":"TF","dial_code":"+262"},{"name":"Gabon - π¬π¦","code":"GA","dial_code":"+241"},{"name":"Gambia - π¬π²","code":"GM","dial_code":"+220"},{"name":"Georgia - π¬πͺ","code":"GE","dial_code":"+995"},{"name":"Germany - π©πͺ","code":"DE","dial_code":"+49"},{"name":"Ghana - π¬π­","code":"GH","dial_code":"+233"},{"name":"Gibraltar - π¬π?","code":"GI","dial_code":"+350"},{"name":"Greece - π¬π·","code":"GR","dial_code":"+30"},{"name":"Greenland - π¬π±","code":"GL","dial_code":"+299"},{"name":"Grenada - π¬π©","code":"GD","dial_code":"+1473"},{"name":"Guadeloupe - π¬π΅","code":"GP","dial_code":"+590"},{"name":"Guam - π¬πΊ","code":"GU","dial_code":"+1671"},{"name":"Guatemala - π¬πΉ","code":"GT","dial_code":"+502"},{"name":"Guernsey - π¬π¬","code":"GG","dial_code":"+44"},{"name":"Guinea - π¬π³","code":"GN","dial_code":"+224"},{"name":"Guinea-Bissau - π¬πΌ","code":"GW","dial_code":"+245"},{"name":"Guyana - π¬πΎ","code":"GY","dial_code":"+592"},{"name":"Haiti - π­πΉ","code":"HT","dial_code":"+509"},{"name":"Heard Island and Mcdonald Islands - π­π²","code":"HM","dial_code":"+672"},{"name":"Holy See (Vatican City State) - π»π¦","code":"VA","dial_code":"+379"},{"name":"Honduras - π­π³","code":"HN","dial_code":"+504"},{"name":"Hong Kong - π­π°","code":"HK","dial_code":"+852"},{"name":"Hungary - π­πΊ","code":"HU","dial_code":"+36"},{"name":"Iceland - π?πΈ","code":"IS","dial_code":"+354"},{"name":"India - π?π³","code":"IN","dial_code":"+91"},{"name":"Indonesia - π?π©","code":"ID","dial_code":"+62"},{"name":"Iran, Islamic Republic of Persian Gulf - π?π·","code":"IR","dial_code":"+98"},{"name":"Iraq - π?πΆ","code":"IQ","dial_code":"+964"},{"name":"Ireland - π?πͺ","code":"IE","dial_code":"+353"},{"name":"Isle of Man - π?π²","code":"IM","dial_code":"+44"},{"name":"Israel - π?π±","code":"IL","dial_code":"+972"},{"name":"Italy - π?πΉ","code":"IT","dial_code":"+39"},{"name":"Jamaica - π―π²","code":"JM","dial_code":"+1876"},{"name":"Japan - π―π΅","code":"JP","dial_code":"+81"},{"name":"Jersey - π―πͺ","code":"JE","dial_code":"+44"},{"name":"Jordan - π―π΄","code":"JO","dial_code":"+962"},{"name":"Kazakhstan - π°πΏ","code":"KZ","dial_code":"+7"},{"name":"Kenya - π°πͺ","code":"KE","dial_code":"+254"},{"name":"Kiribati - π°π?","code":"KI","dial_code":"+686"},{"name":"Korea, Democratic People's Republic of Korea - π°π΅","code":"KP","dial_code":"+850"},{"name":"Korea, Republic of South Korea - π°π·","code":"KR","dial_code":"+82"},{"name":"Kosovo - π½π°","code":"XK","dial_code":"+383"},{"name":"Kuwait - π°πΌ","code":"KW","dial_code":"+965"},{"name":"Kyrgyzstan - π°π¬","code":"KG","dial_code":"+996"},{"name":"Laos - π±π¦","code":"LA","dial_code":"+856"},{"name":"Latvia - π±π»","code":"LV","dial_code":"+371"},{"name":"Lebanon - π±π§","code":"LB","dial_code":"+961"},{"name":"Lesotho - π±πΈ","code":"LS","dial_code":"+266"},{"name":"Liberia - π±π·","code":"LR","dial_code":"+231"},{"name":"Libyan Arab Jamahiriya - π±πΎ","code":"LY","dial_code":"+218"},{"name":"Liechtenstein - π±π?","code":"LI","dial_code":"+423"},{"name":"Lithuania - π±πΉ","code":"LT","dial_code":"+370"},{"name":"Luxembourg - π±πΊ","code":"LU","dial_code":"+352"},{"name":"Macao - π²π΄","code":"MO","dial_code":"+853"},{"name":"Macedonia - π²π°","code":"MK","dial_code":"+389"},{"name":"Madagascar - π²π¬","code":"MG","dial_code":"+261"},{"name":"Malawi - π²πΌ","code":"MW","dial_code":"+265"},{"name":"Malaysia - π²πΎ","code":"MY","dial_code":"+60"},{"name":"Maldives - π²π»","code":"MV","dial_code":"+960"},{"name":"Mali - π²π±","code":"ML","dial_code":"+223"},{"name":"Malta - π²πΉ","code":"MT","dial_code":"+356"},{"name":"Marshall Islands - π²π­","code":"MH","dial_code":"+692"},{"name":"Martinique - π²πΆ","code":"MQ","dial_code":"+596"},{"name":"Mauritania - π²π·","code":"MR","dial_code":"+222"},{"name":"Mauritius - π²πΊ","code":"MU","dial_code":"+230"},{"name":"Mayotte - πΎπΉ","code":"YT","dial_code":"+262"},{"name":"Mexico - π²π½","code":"MX","dial_code":"+52"},{"name":"Micronesia, Federated States of Micronesia - π«π²","code":"FM","dial_code":"+691"},{"name":"Moldova - π²π©","code":"MD","dial_code":"+373"},{"name":"Monaco - π²π¨","code":"MC","dial_code":"+377"},{"name":"Mongolia - π²π³","code":"MN","dial_code":"+976"},{"name":"Montenegro - π²πͺ","code":"ME","dial_code":"+382"},{"name":"Montserrat - π²πΈ","code":"MS","dial_code":"+1664"},{"name":"Morocco - π²π¦","code":"MA","dial_code":"+212"},{"name":"Mozambique - π²πΏ","code":"MZ","dial_code":"+258"},{"name":"Myanmar - π²π²","code":"MM","dial_code":"+95"},{"name":"Namibia - π³π¦","code":"NA","dial_code":"+264"},{"name":"Nauru - π³π·","code":"NR","dial_code":"+674"},{"name":"Nepal - π³π΅","code":"NP","dial_code":"+977"},{"name":"Netherlands - π³π±","code":"NL","dial_code":"+31"},{"name":"Netherlands Antilles - ","code":"AN","dial_code":"+599"},{"name":"New Caledonia - π³π¨","code":"NC","dial_code":"+687"},{"name":"New Zealand - π³πΏ","code":"NZ","dial_code":"+64"},{"name":"Nicaragua - π³π?","code":"NI","dial_code":"+505"},{"name":"Niger - π³πͺ","code":"NE","dial_code":"+227"},{"name":"Nigeria - π³π¬","code":"NG","dial_code":"+234"},{"name":"Niue - π³πΊ","code":"NU","dial_code":"+683"},{"name":"Norfolk Island - π³π«","code":"NF","dial_code":"+672"},{"name":"Northern Mariana Islands - π²π΅","code":"MP","dial_code":"+1670"},{"name":"Norway - π³π΄","code":"NO","dial_code":"+47"},{"name":"Oman - π΄π²","code":"OM","dial_code":"+968"},{"name":"Pakistan - π΅π°","code":"PK","dial_code":"+92"},{"name":"Palau - π΅πΌ","code":"PW","dial_code":"+680"},{"name":"Palestinian Territory, Occupied - π΅πΈ","code":"PS","dial_code":"+970"},{"name":"Panama - π΅π¦","code":"PA","dial_code":"+507"},{"name":"Papua New Guinea - π΅π¬","code":"PG","dial_code":"+675"},{"name":"Paraguay - π΅πΎ","code":"PY","dial_code":"+595"},{"name":"Peru - π΅πͺ","code":"PE","dial_code":"+51"},{"name":"Philippines - π΅π­","code":"PH","dial_code":"+63"},{"name":"Pitcairn - π΅π³","code":"PN","dial_code":"+64"},{"name":"Poland - π΅π±","code":"PL","dial_code":"+48"},{"name":"Portugal - π΅πΉ","code":"PT","dial_code":"+351"},{"name":"Puerto Rico - π΅π·","code":"PR","dial_code":"+1939"},{"name":"Qatar - πΆπ¦","code":"QA","dial_code":"+974"},{"name":"Romania - π·π΄","code":"RO","dial_code":"+40"},{"name":"Russia - π·πΊ","code":"RU","dial_code":"+7"},{"name":"Rwanda - π·πΌ","code":"RW","dial_code":"+250"},{"name":"Reunion - π·πͺ","code":"RE","dial_code":"+262"},{"name":"Saint Barthelemy - π§π±","code":"BL","dial_code":"+590"},{"name":"Saint Helena, Ascension and Tristan Da Cunha - πΈπ­","code":"SH","dial_code":"+290"},{"name":"Saint Kitts and Nevis - π°π³","code":"KN","dial_code":"+1869"},{"name":"Saint Lucia - π±π¨","code":"LC","dial_code":"+1758"},{"name":"Saint Martin - π²π«","code":"MF","dial_code":"+590"},{"name":"Saint Pierre and Miquelon - π΅π²","code":"PM","dial_code":"+508"},{"name":"Saint Vincent and the Grenadines - π»π¨","code":"VC","dial_code":"+1784"},{"name":"Samoa - πΌπΈ","code":"WS","dial_code":"+685"},{"name":"San Marino - πΈπ²","code":"SM","dial_code":"+378"},{"name":"Sao Tome and Principe - πΈπΉ","code":"ST","dial_code":"+239"},{"name":"Saudi Arabia - πΈπ¦","code":"SA","dial_code":"+966"},{"name":"Senegal - πΈπ³","code":"SN","dial_code":"+221"},{"name":"Serbia - π·πΈ","code":"RS","dial_code":"+381"},{"name":"Seychelles - πΈπ¨","code":"SC","dial_code":"+248"},{"name":"Sierra Leone - πΈπ±","code":"SL","dial_code":"+232"},{"name":"Singapore - πΈπ¬","code":"SG","dial_code":"+65"},{"name":"Slovakia - πΈπ°","code":"SK","dial_code":"+421"},{"name":"Slovenia - πΈπ?","code":"SI","dial_code":"+386"},{"name":"Solomon Islands - πΈπ§","code":"SB","dial_code":"+677"},{"name":"Somalia - πΈπ΄","code":"SO","dial_code":"+252"},{"name":"South Africa - πΏπ¦","code":"ZA","dial_code":"+27"},{"name":"South Sudan - πΈπΈ","code":"SS","dial_code":"+211"},{"name":"South Georgia and the South Sandwich Islands - π¬πΈ","code":"GS","dial_code":"+500"},{"name":"Spain - πͺπΈ","code":"ES","dial_code":"+34"},{"name":"Sri Lanka - π±π°","code":"LK","dial_code":"+94"},{"name":"Sudan - πΈπ©","code":"SD","dial_code":"+249"},{"name":"Suriname - πΈπ·","code":"SR","dial_code":"+597"},{"name":"Svalbard and Jan Mayen - πΈπ―","code":"SJ","dial_code":"+47"},{"name":"Swaziland - πΈπΏ","code":"SZ","dial_code":"+268"},{"name":"Sweden - πΈπͺ","code":"SE","dial_code":"+46"},{"name":"Switzerland - π¨π­","code":"CH","dial_code":"+41"},{"name":"Syrian Arab Republic - πΈπΎ","code":"SY","dial_code":"+963"},{"name":"Taiwan - πΉπΌ","code":"TW","dial_code":"+886"},{"name":"Tajikistan - πΉπ―","code":"TJ","dial_code":"+992"},{"name":"Tanzania, United Republic of Tanzania - πΉπΏ","code":"TZ","dial_code":"+255"},{"name":"Thailand - πΉπ­","code":"TH","dial_code":"+66"},{"name":"Timor-Leste - πΉπ±","code":"TL","dial_code":"+670"},{"name":"Togo - πΉπ¬","code":"TG","dial_code":"+228"},{"name":"Tokelau - πΉπ°","code":"TK","dial_code":"+690"},{"name":"Tonga - πΉπ΄","code":"TO","dial_code":"+676"},{"name":"Trinidad and Tobago - πΉπΉ","code":"TT","dial_code":"+1868"},{"name":"Tunisia - πΉπ³","code":"TN","dial_code":"+216"},{"name":"Turkey - πΉπ·","code":"TR","dial_code":"+90"},{"name":"Turkmenistan - πΉπ²","code":"TM","dial_code":"+993"},{"name":"Turks and Caicos Islands - πΉπ¨","code":"TC","dial_code":"+1649"},{"name":"Tuvalu - πΉπ»","code":"TV","dial_code":"+688"},{"name":"Uganda - πΊπ¬","code":"UG","dial_code":"+256"},{"name":"Ukraine - πΊπ¦","code":"UA","dial_code":"+380"},{"name":"United Arab Emirates - π¦πͺ","code":"AE","dial_code":"+971"},{"name":"United Kingdom - π¬π§","code":"GB","dial_code":"+44"},{"name":"United States - πΊπΈ","code":"US","dial_code":"+1"},{"name":"Uruguay - πΊπΎ","code":"UY","dial_code":"+598"},{"name":"Uzbekistan - πΊπΏ","code":"UZ","dial_code":"+998"},{"name":"Vanuatu - π»πΊ","code":"VU","dial_code":"+678"},{"name":"Venezuela, Bolivarian Republic of Venezuela - π»πͺ","code":"VE","dial_code":"+58"},{"name":"Vietnam - π»π³","code":"VN","dial_code":"+84"},{"name":"Virgin Islands, British - π»π¬","code":"VG","dial_code":"+1284"},{"name":"Virgin Islands, U.S. - π»π?","code":"VI","dial_code":"+1340"},{"name":"Wallis and Futuna - πΌπ«","code":"WF","dial_code":"+681"},{"name":"Yemen - πΎπͺ","code":"YE","dial_code":"+967"},{"name":"Zambia - πΏπ²","code":"ZM","dial_code":"+260"},{"name":"Zimbabwe - πΏπΌ","code":"ZW","dial_code":"+263"}];
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) 
  {
    console.log('port:', event.value);
  }

  ngOnInit() {
  }

  ionViewDidEnter()
  {
    if(localStorage.getItem('comeFrom') == 'register')
    {
      this.router.navigate(['/interest']);
      return;
    }
  }

  getCountry(selectedCountryObject: any){
    alert(selectedCountryObject)
  }

  goToHome()
  {
    this.router.navigate(['/blog']);
  }

  showPopAdd()
  {
    this.showPop = "show";
  }
  
  closePop()
  {
    this.showPop = "notshow";
  }
 

  async presentPopover()
  {
    const modal = await this.popoverController.create({
      component: PasswordInstructionsPage,
      cssClass: 'pswdPopover'
    });

    return await modal.present();
    console.log('2');
  }

  register(name,email,countryCode,phone,password,confirm_password)
  {
  	if(this.errors.indexOf(name) >= 0){
  		this.presentToast('Please enter your name.','danger');
  		return false;
  	}
    
    if(this.errors.indexOf(countryCode) >= 0){
      this.presentToast('Please selct country code for phone number.','danger');
      return false;
    }

    if(this.errors.indexOf(phone) >= 0){
      this.presentToast('Please enter your phone number.','danger');
      return false;
    }

    if(this.errors.indexOf(email) >= 0){
      this.presentToast('Please enter your email address.','danger');
      return false;
    }
    
  	var reg= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  	if(!reg.test(String(email).toLowerCase()) && email != undefined && email != ''){
  		this.presentToast('Please enter valid email address.','danger');
    		return false;
  	}

  	if(this.errors.indexOf(password) >= 0){
  		this.presentToast('Please enter your password.','danger');
  		return false;
  	}

    // var passExp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passExp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])(?!.*\s).{8,15}$/;

    if(!passExp.test(password))
    {
      this.presentToast('Password should have min. 8 characters, One UpperCase & One Lowercase & one special character.','danger');
        return false;
    }

  	// if(password.length < 8){
  	// 	this.presentToast('Please enter atleast 6 digits password.','danger');
  	// 	return false;
  	// }
  	if(this.errors.indexOf(confirm_password) >= 0){
  		this.presentToast('Please enter confirm password.','danger');
  		return false;
  	}
  	if(password != confirm_password){
  		this.presentToast('Password and Confirm password should be same.','danger');
  		return false;
  	}
    // if(this.errors.indexOf(type) >= 0){
    //   this.presentToast('Please enter type.','danger');
    //   return false;
    // }
  	this.presentLoading();
    let dict ={
      name: name,
      email: email == undefined ? '' : email,
      countryCode: countryCode.dial_code,
      // countryCode: countryCode,
      phone: phone,
      password: password,
      type: 'user',
      provider:'Direct'
    };
  	this.userService.postData(dict,'registerUser').subscribe((result) => {
  		this.stopLoading();
  		if(result.status == 1){
  			this.presentToast('Registered successfully!','success');
  			var userId = this.userService.encryptData(result.data.id,this.ENC_SALT);
        localStorage.setItem('sin_auth_token',userId);
        localStorage.setItem('sin_auth_userId',result.data.id);
        localStorage.setItem('sin_auth_user_name',result.data.name +' '+result.data.last_name);
        localStorage.setItem('sin_auth_user_image',result.data.profile_picture);
        localStorage.setItem('sin_auth_user_email',result.data.email);
        
        this.events.publish('user_logged_in:true',result.data);
        localStorage.setItem('is_login','true');

        localStorage.setItem('comeFrom','register');

        localStorage.setItem('sellerSwitched','false');

        this.globalFooService.publishSomeData({
          foo: {'data': result.data, 'page': 'registerDone'}
        });

        this.globalFooService.publishSomeData({
          foo: {'data': "registerDone", 'page': 'showInterest'}
        });

        this.userService.postData({'guest_user_id': localStorage.getItem('guestUserId'), 'real_user_id': result.data.id},'replace_guestUser_to_realUser').subscribe((result) => {
            this.router.navigate(['/interest']);
            // this.router.navigate(['/blog']);
        });
  		}
  		else if(result.status == 2){
  			this.presentToast('Your provided Email or Number has already been used. Please use another Email address or phone number.','danger');
  		}
      else if(result.status == 3){
        this.presentToast('Your provided Number has already been used. Please use another Phone number.','danger');
      }
  		else{
  			this.presentToast('Error while signing up! Please try later.','danger');
  		}
  	},
    err => {
    	this.stopLoading();
        this.presentToast('Technical error,Please try after some time.','danger');
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
