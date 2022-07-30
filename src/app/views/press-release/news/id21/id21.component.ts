import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE, PRESSRELEASE_IMAGE } from 'src/environments/constants/constants';
import { PressReleaseService } from '../../press-release.service';

@Component({
  selector: 'app-id21',
  templateUrl: './id21.component.html',
  styleUrls: ['./id21.component.scss']
})
export class Id21Component implements OnInit {

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
      this.htmlStr = this.PressRelease[20].content
      this.gallery = this.PressRelease[20].galleryData[0].images
    })
  }

}
