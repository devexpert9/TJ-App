import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {
all_categories:any;
socialLinks:any;
  constructor(public userService: UserService,public router: Router) { 
    this.getCategories();
  	this.getSocialInfo();
  }

  ngOnInit() {
  }

  getCategories(){
    this.userService.getData('getCategories').subscribe((result) => {
      this.all_categories = result.categories;
    },
    err => {
      console.log('api error');
    });
  }

  getSocialInfo(){
    this.userService.postData({},'socialLinks').subscribe((result) => {
      console.log(result)
      this.socialLinks = result.socialLinks;
    },
    err => {
      console.log('api error');
    });
  }

  productDetails(catId,subcatId){
    this.router.navigate(['/products'],{queryParams : {cat : catId, subcat: subcatId}});
  }

}
