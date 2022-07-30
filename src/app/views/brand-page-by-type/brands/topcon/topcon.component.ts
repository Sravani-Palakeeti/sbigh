import { Component, OnInit } from '@angular/core';
import { OurBrandsService } from 'src/app/views/our-brands/our-brands.service';
import { BRANDSPAGE_IMAGE, GALLERY_IMAGE } from 'src/environments/constants/constants';

@Component({
  selector: 'app-topcon',
  templateUrl: './topcon.component.html',
  styleUrls: ['./topcon.component.scss']
})
export class TopconComponent implements OnInit {

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
      this.htmlStr = this.BrandDetails[13].content
      this.gallery = this.BrandDetails[13].galleryData[0].images  
    })
  }
  

}
