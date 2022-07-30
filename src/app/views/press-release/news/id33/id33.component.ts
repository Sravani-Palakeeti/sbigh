import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE, PRESSRELEASE_IMAGE } from 'src/environments/constants/constants';
import { PressReleaseService } from '../../press-release.service';

@Component({
  selector: 'app-id33',
  templateUrl: './id33.component.html',
  styleUrls: ['./id33.component.scss']
})
export class Id33Component implements OnInit {

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
      this.htmlStr = this.PressRelease[32].content
      this.gallery = this.PressRelease[32].galleryData[0].images
    })
  }

}
