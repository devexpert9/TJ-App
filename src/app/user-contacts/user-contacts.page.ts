import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.page.html',
  styleUrls: ['./user-contacts.page.scss'],
})
export class UserContactsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	public buttonClickeddrop: boolean = false; //Whatever you want to initialise it as

    public onButtonClickdrop() {

        this.buttonClickeddrop = !this.buttonClickeddrop;
    }  
}
