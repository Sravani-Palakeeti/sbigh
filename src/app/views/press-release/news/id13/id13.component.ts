import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE, PRESSRELEASE_IMAGE } from 'src/environments/constants/constants';
import { PressReleaseService } from '../../press-release.service';

@Component({
  selector: 'app-id13',
  templateUrl: './id13.component.html',
  styleUrls: ['./id13.component.scss']
})
export class Id13Component implements OnInit {

  public PressRelease : any
  public htmlStr:any
  public pressRleaseImage_Path = PRESSRELEASE_IMAGE
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public pressRelease : PressReleaseService) { }

  ngOnInit(): void {
    this.getpage()
  }
  getpage(){
    this.pressRelease.list().subscribe(res => {
      this.PressRelease = res
      this.htmlStr = this.PressRelease[12].content
      this.gallery = this.PressRelease[12].galleryData[0].images
    })
  }

}
