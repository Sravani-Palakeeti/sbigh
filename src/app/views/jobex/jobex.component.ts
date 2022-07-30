import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { JobexService } from './jobex.service';

@Component({
  selector: 'app-jobex',
  templateUrl: './jobex.component.html',
  styleUrls: ['./jobex.component.scss']
})
export class JobexComponent implements OnInit {

  public singlePage : any;
  public galleryDetails : any;
  public gallery_path = GALLERY_IMAGE;
  public htmlStr : any;
  public gallery : any;
  
  constructor( public singlePageTitle : JobexService) { }

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
