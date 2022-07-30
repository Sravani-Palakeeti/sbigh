import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { WorldTravelMarketService } from './world-travel-market.service';

@Component({
  selector: 'app-world-travel-market',
  templateUrl: './world-travel-market.component.html',
  styleUrls: ['./world-travel-market.component.scss']
})
export class WorldTravelMarketComponent implements OnInit {

  public singlePage : any
  htmlStr: any;
  public gallery_path = GALLERY_IMAGE
  public gallery :any
  constructor ( public singlePageTitle : WorldTravelMarketService) { }

  ngOnInit(): void {
    this.getpage()
  }

  getpage(){
    this.singlePageTitle.list().subscribe(res => {
      this.singlePage = res
      this.htmlStr = this.singlePage[0].content
      this.gallery = this.singlePage[0].galleryData[0].images
  })
  
}
}