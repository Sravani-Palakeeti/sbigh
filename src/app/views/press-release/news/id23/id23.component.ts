import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE, PRESSRELEASE_IMAGE } from 'src/environments/constants/constants';
import { PressReleaseService } from '../../press-release.service';

@Component({
  selector: 'app-id23',
  templateUrl: './id23.component.html',
  styleUrls: ['./id23.component.scss']
})
export class Id23Component implements OnInit {

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
      this.htmlStr = this.PressRelease[22].content
      this.gallery = this.PressRelease[22].galleryData[0].images
    })
  }

}
