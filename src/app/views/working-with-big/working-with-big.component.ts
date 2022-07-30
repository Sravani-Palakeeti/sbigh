import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { WorkingWithBigService } from './working-with-big.service';

@Component({
  selector: 'app-working-with-big',
  templateUrl: './working-with-big.component.html',
  styleUrls: ['./working-with-big.component.scss']
})
export class WorkingWithBigComponent implements OnInit {

  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : WorkingWithBigService) { }

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
