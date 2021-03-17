import { Component, OnInit } from '@angular/core';
import { ModalController , AlertController, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { config } from '../config';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.page.html',
  styleUrls: ['./choose-location.page.scss'],
})   
export class ChooseLocationPage implements OnInit {
userId:any;
userSettings = {inputPlaceholderText:'Enter your address...'}
  constructor(private modalCtrl:ModalController , public alertController: AlertController, public events: Events, public router: Router, public userService: UserService) { }

  ngOnInit() {
    var token = localStorage.getItem('sin_auth_token');
    this.userId = this.userService.decryptData(token,config.ENC_SALT);
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Enter A Pincode',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: '147701'
        }
      ],
      buttons: [
        {
          text: 'Apply',
		      cssClass: 'darkred',
          handler: () => {
            console.log('Confirm Ok');
          }
        },
		    {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'default',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  autoCompleteCallback(selectedData:any) {
    localStorage.setItem('sin_current_address',JSON.stringify(selectedData.data));
    this.events.publish('current_address_changed:true', selectedData.data.name);
    this.closeModal();
  }

  address(){
    this.closeModal();
    this.router.navigate(['/your-account'],{
      queryParams : { address : true }
    });
  }

}
