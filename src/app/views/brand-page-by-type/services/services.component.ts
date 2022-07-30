import { Component, OnInit } from '@angular/core';
import { BRANDSPAGE_IMAGE } from 'src/environments/constants/constants';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public brandTitle="Our Brands"

  public BrandDetails : any;
  public BrandImage_path : any;
  gallery: any;
  
   constructor ( public brands : ServicesService){}

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
