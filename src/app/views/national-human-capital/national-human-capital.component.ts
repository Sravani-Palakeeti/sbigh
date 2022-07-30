import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { NationalHumanCapitalService } from './national-human-capital.service';

@Component({
  selector: 'app-national-human-capital',
  templateUrl: './national-human-capital.component.html',
  styleUrls: ['./national-human-capital.component.scss']
})
export class NationalHumanCapitalComponent implements OnInit {
  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : NationalHumanCapitalService) { }

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
