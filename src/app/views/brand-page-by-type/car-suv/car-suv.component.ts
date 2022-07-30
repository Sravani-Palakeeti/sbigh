import { Component, OnInit } from '@angular/core';
import { BRANDSPAGE_IMAGE } from 'src/environments/constants/constants';
import { CarSuvService } from './car-suv.service';

@Component({
  selector: 'app-car-suv',
  templateUrl: './car-suv.component.html',
  styleUrls: ['./car-suv.component.scss']
})
export class CarSuvComponent implements OnInit {

  public brandTitle="Our Brands"

  public BrandDetails : any;
  public BrandImage_path : any;
  gallery: any;
  
   constructor ( public brands : CarSuvService){}

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
