import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { TrafficExpoService } from './traffic-expo.service';

@Component({
  selector: 'app-traffic-expo',
  templateUrl: './traffic-expo.component.html',
  styleUrls: ['./traffic-expo.component.scss']
})
export class TrafficExpoComponent implements OnInit {
  public singlePage : any;
  public galleryDetails : any;
  public gallery_path = GALLERY_IMAGE;
  public htmlStr : any;
  public gallery : any;

  constructor( public singlePageTitle : TrafficExpoService) { }

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
