import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returns-replacement',
  templateUrl: './returns-replacement.page.html',
  styleUrls: ['./returns-replacement.page.scss'],
})
export class ReturnsReplacementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	public buttonClickeddrop: boolean = false; //Whatever you want to initialise it as

    public onButtonClickdrop() {

        this.buttonClickeddrop = !this.buttonClickeddrop;
    }  
}
