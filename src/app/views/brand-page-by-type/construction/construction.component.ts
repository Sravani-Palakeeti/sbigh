import { Component, OnInit } from '@angular/core';
import { BRANDSPAGE_IMAGE } from 'src/environments/constants/constants';
import { ConstructionService } from './construction.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {

  public brandTitle="Our Brands"

  public BrandDetails : any;
  public BrandImage_path : any;
  gallery: any;
  
   constructor ( public brands : ConstructionService){}

  ngOnInit(): void {
    this.getbrand()
  }

  async getbrand(){
    this.brands.list().subscribe(res => {
      this.BrandDetails = res
      console.log(res)
      this.BrandImage_path = BRANDSPAGE_IMAGE
      // this.htmlStr = this.BrandDetails[0].content
     this.gallery = this.BrandDetails[0].galleryData[0].images
    })
  }


}
