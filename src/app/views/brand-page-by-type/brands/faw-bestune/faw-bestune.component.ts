import { Component, OnInit } from '@angular/core';
import { OurBrandsService } from 'src/app/views/our-brands/our-brands.service';
import { BRANDSPAGE_IMAGE, GALLERY_IMAGE } from 'src/environments/constants/constants';

@Component({
  selector: 'app-faw-bestune',
  templateUrl: './faw-bestune.component.html',
  styleUrls: ['./faw-bestune.component.scss']
})
export class FawBestuneComponent implements OnInit {

  
  public gallery_path = GALLERY_IMAGE;
  public BrandDetails: any;
  public BrandImage_path: any;
  gallery: any;
  htmlStr: any;
  
  
  constructor(public brands: OurBrandsService) { }

  ngOnInit(): void {
    this.getbrand()
  }

  async getbrand() {
    this.brands.list().subscribe(res => {
      this.BrandDetails = res
      this.BrandImage_path = BRANDSPAGE_IMAGE
      this.htmlStr = this.BrandDetails[3].content
      this.gallery = this.BrandDetails[3].galleryData[0].images
    
    })
   
  }

}
