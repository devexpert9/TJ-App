import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-on-siniyetu',
  templateUrl: './sell-on-siniyetu.page.html',
  styleUrls: ['./sell-on-siniyetu.page.scss'],
})
export class SellOnSiniyetuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	public buttonClickeddrop: boolean = false; //Whatever you want to initialise it as

    public onButtonClickdrop() {

        this.buttonClickeddrop = !this.buttonClickeddrop;
    }  
}
