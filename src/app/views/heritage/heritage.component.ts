import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { HeritageService } from './heritage.service';

@Component({
  selector: 'app-heritage',
  templateUrl: './heritage.component.html',
  styleUrls: ['./heritage.component.scss']
})
export class HeritageComponent implements OnInit {
  
  public singlePage : any;
  public galleryDetails : any;
  public gallery_path = GALLERY_IMAGE;
  public htmlStr : any;
  public gallery : any;

  constructor( public singlePageTitle: HeritageService ) { }

  ngOnInit(): void {
    this.getpage()
  }

  getpage(){
    this.singlePageTitle.list().subscribe(res => {
      this.singlePage = res
      this.htmlStr = this.singlePage[0].content
      this.gallery = this.singlePage[0].galleryData[0].images;
    })
  }
}
