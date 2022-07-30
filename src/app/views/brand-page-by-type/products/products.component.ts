import { Component, OnInit } from '@angular/core';
import { BRANDSPAGE_IMAGE } from 'src/environments/constants/constants';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public brandTitle="Our Brands"

  public BrandDetails : any;
  public BrandImage_path : any;
  gallery: any;
  
   constructor ( public brands : ProductsService){}

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
