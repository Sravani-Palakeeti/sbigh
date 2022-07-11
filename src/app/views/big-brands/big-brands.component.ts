import { Component, OnInit } from '@angular/core';
import { BigBrandsService } from 'src/app/Services/big-brands.service';
import { BRANDS_IMAGE } from 'src/environments/constants/constants';

@Component({
  selector: 'app-big-brands',
  templateUrl: './big-brands.component.html',
  styleUrls: ['./big-brands.component.scss']
})
export class BigBrandsComponent implements OnInit {

  public BrandDetails : any;
  public BrandImage_path : any;

  constructor( private brands: BigBrandsService ) { }

  ngOnInit(): void {
    this.getbrands()
  }
  async getbrands(){
    this.BrandImage_path = BRANDS_IMAGE
    const result = this.brands.list().subscribe(res=>{
      this.BrandDetails=res.data
      console.log(res)
    })
  }

}
