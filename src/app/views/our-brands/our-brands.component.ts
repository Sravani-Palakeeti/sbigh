import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BigBrandsService } from 'src/app/Services/big-brands.service';
import { BRANDSPAGE_IMAGE, BRANDS_IMAGE } from 'src/environments/constants/constants';
import { NissanComponent } from '../brand-page-by-type/brands/nissan/nissan.component';
import { OurBrandsService } from './our-brands.service';


@Component({
  selector: 'app-our-brands',
  templateUrl: './our-brands.component.html',
  styleUrls: ['./our-brands.component.scss']
})
// export class OurBrandsComponent implements OnInit {
  export class OurBrandsComponent implements AfterViewInit{
 
    public cars : any
  public brandTitle="Our Brands"

  public BrandDetails : any;
  public BrandImage_path : any;
  gallery: any;
  
  public LogoDetails : any;
  public LogoImage_Path : any;

  @ViewChild(NissanComponent) nissan: any;

   constructor ( public brands : OurBrandsService, public logos : BigBrandsService){
 
}

ngAfterViewInit(): void {
  this.BrandDetails = this.nissan.content
}

  ngOnInit(): void {
    this.getbrand()
    // this.getlogo()
  }

  async getbrand(){
    this.brands.list().subscribe(res => {
      this.BrandDetails = res
      console.log(res)
      this.cars = this.BrandDetails
      this.BrandImage_path = BRANDSPAGE_IMAGE
     this.gallery = this.BrandDetails[0].galleryData[0].images
    })
  }

  async getlogo(){
    this.logos.list().subscribe(res => {
      this.LogoDetails = res
      this.LogoImage_Path = BRANDS_IMAGE
      console.log(res)
    })
  }

}
