import { Component, OnInit } from '@angular/core';
import { BANNERS_IMAGE, BRANDS_IMAGE } from 'src/environments/constants/constants';
import { BannerService } from '../banner.service';
import { BigBrandsService } from 'src/app/Services/big-brands.service';

@Component({
  selector: 'app-homepage-banners',
  templateUrl: './homepage-banners.component.html',
  styleUrls: ['./homepage-banners.component.scss']
})
export class HomepageBannersComponent implements OnInit {

  public brandTitle="Our Brands"

  public BannerDetails : any;
  public Banners_path : any;
  public BrandDetails : any;
  public BrandImage_path : any;

  constructor(private banner: BannerService, private brands: BigBrandsService) { }


  ngOnInit(): void {
    this.getBanners()
    this.getbrands()
  }


  async getBanners(){
    this.Banners_path = BANNERS_IMAGE
    const result = this.banner.list().subscribe(res =>{
      this.BannerDetails = res.data
    })
  }

  async getbrands(){
    this.BrandImage_path = BRANDS_IMAGE
    const result = this.brands.list().subscribe(res=>{
      this.BrandDetails=res.data
      console.log(res)
    })
  }
}
