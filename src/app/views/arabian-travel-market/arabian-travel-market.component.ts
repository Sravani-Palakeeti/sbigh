import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { ArabianTravelMarketService } from './arabian-travel-market.service';

@Component({
  selector: 'app-arabian-travel-market',
  templateUrl: './arabian-travel-market.component.html',
  styleUrls: ['./arabian-travel-market.component.scss']
})
export class ArabianTravelMarketComponent implements OnInit {

  public galleryDetails : any;
  public gallery_path = GALLERY_IMAGE;
  public htmlStr : any;
  public gallery : any;
  singlePage: any;
  constructor( public singlePageTitle : ArabianTravelMarketService) { }

  ngOnInit(): void {
    this.getpage()
  }
  
  getpage(){
    this.singlePageTitle.list().subscribe(res => {
      this.singlePage = res
      this.htmlStr = this.singlePage[0].content
      this.gallery = this.singlePage[0].galleryData[0].images;
    })
  }

}
