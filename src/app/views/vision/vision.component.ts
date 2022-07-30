import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { VisionService } from './vision.service';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : VisionService) { }

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
