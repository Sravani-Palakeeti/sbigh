import { Component, Input, OnInit } from '@angular/core';
import { OurBrandsService } from 'src/app/views/our-brands/our-brands.service';
import { BRANDSPAGE_IMAGE, GALLERY_IMAGE } from 'src/environments/constants/constants';

@Component({
  selector: 'app-nissan',
  templateUrl: './nissan.component.html',
  styleUrls: ['./nissan.component.scss']
})
export class NissanComponent implements OnInit {

 
  public gallery_path = GALLERY_IMAGE;
  public BrandDetails: any;
  public BrandImage_path: any;
  gallery: any;
  htmlStr: any;
  @Input() data : any;
  
  constructor(public brands: OurBrandsService) { }

  ngOnInit(): void {
    this.getbrand()
  }

  async getbrand() {
    this.brands.list().subscribe(res => {
      this.BrandDetails = res
      this.BrandImage_path = BRANDSPAGE_IMAGE
       console.log(res)
      this.htmlStr = this.BrandDetails[1].content
      this.gallery = this.BrandDetails[1].galleryData[0].images
    })
  }

}
