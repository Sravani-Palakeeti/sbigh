import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { OpmexService } from './opmex.service';

@Component({
  selector: 'app-opmex',
  templateUrl: './opmex.component.html',
  styleUrls: ['./opmex.component.scss']
})
export class OpmexComponent implements OnInit {

  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : OpmexService) { }

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
