import { Component, OnInit } from '@angular/core';
import { OurBrandsService } from 'src/app/views/our-brands/our-brands.service';
import { BRANDSPAGE_IMAGE, GALLERY_IMAGE } from 'src/environments/constants/constants';

@Component({
  selector: 'app-lukoil',
  templateUrl: './lukoil.component.html',
  styleUrls: ['./lukoil.component.scss']
})
export class LukoilComponent implements OnInit {

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
      this.htmlStr = this.BrandDetails[17].content
      this.gallery = this.BrandDetails[17].galleryData[0].images  
    })
  }

}
