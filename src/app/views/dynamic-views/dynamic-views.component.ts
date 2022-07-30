import { Component, Input, OnInit } from '@angular/core';
import { BigBrandsService } from 'src/app/Services/big-brands.service';
import { BRANDS_IMAGE } from 'src/environments/constants/constants';
import { OurBrandsService } from '../our-brands/our-brands.service';

@Component({
  selector: 'app-dynamic-views',
  templateUrl: './dynamic-views.component.html',
  styleUrls: ['./dynamic-views.component.scss']
})
export class DynamicViewsComponent implements OnInit {

  dynamicPageView : any
  dynamicImage_Path : any
  gallery : any
  htmlStr: any;
  BrandImage_path: any;
  BrandDetails: any;
  @Input() data! : any[]
  
  constructor( public dynamicView : OurBrandsService, public brands : BigBrandsService)  { }

  ngOnInit(): void {
    this.getbrandspage()
  }
 
async  getbrandspage(){
    this.dynamicView.list().subscribe( res => {
      this.dynamicPageView = res
      // console.log(res)
      this.dynamicImage_Path = BRANDS_IMAGE
      this.htmlStr = this.dynamicPageView[0].content
      // this.gallery = this.dynamicPageView[1].galleryData[0].images
    })
  }

}
