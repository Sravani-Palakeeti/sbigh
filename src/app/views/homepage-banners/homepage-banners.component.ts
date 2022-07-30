import { Component, OnInit } from '@angular/core';
import { BANNERS_IMAGE, BRANDS_IMAGE, COUNTERIMAGE } from 'src/environments/constants/constants';
import { BannerService } from '../banner.service';
import { BigBrandsService } from 'src/app/Services/big-brands.service';
import { CounterService } from 'src/app/Services/counter.service';

@Component({
  selector: 'app-homepage-banners',
  templateUrl: './homepage-banners.component.html',
  styleUrls: ['./homepage-banners.component.scss']
})
export class HomepageBannersComponent implements OnInit {

  public brandTitle="Our Brands"
 // for banners
  public BannerDetails : any;
  public Banners_path : any;
 // for brands
  public BrandDetails : any;
  public BrandImage_path : any;
  // for counter
  public counterDetails : any
  public counterIcons : any

  constructor(private banner: BannerService, private brands: BigBrandsService, private counter: CounterService) { }


  ngOnInit(): void {
    this.getBanners()
    this.getbrands()
    this.getcounters()
  }


  async getBanners(){
    this.Banners_path = BANNERS_IMAGE
     this.banner.list().subscribe(res =>{
      this.BannerDetails = res.data
      
    })
  }

  async getbrands(){
    this.BrandImage_path = BRANDS_IMAGE
     this.brands.list().subscribe(res=>{
      this.BrandDetails=res.data
    })
  }

  async getcounters(){
    this.counterIcons = COUNTERIMAGE
    this.counter.list().subscribe(res => {
      this.counterDetails = res.data
      // console.log("api hitted");
    })
  }

}
