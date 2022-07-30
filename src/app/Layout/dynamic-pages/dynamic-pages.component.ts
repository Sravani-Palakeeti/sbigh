import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { DynamicPageService } from './dynamic-page.service';

@Component({
  selector: 'app-dynamic-pages',
  templateUrl: './dynamic-pages.component.html',
  styleUrls: ['./dynamic-pages.component.scss']
})
export class DynamicPagesComponent implements OnInit {

  public singlePage : any;
  public galleryDetails : any;
  public gallery_path = GALLERY_IMAGE;
  public htmlStr : any;
  public gallery : any;

  constructor(public siglePageTitle : DynamicPageService) { }

  ngOnInit(): void {
    this.getPage()
  }

  async getPage() {
    this.siglePageTitle.list().subscribe(res => {
      this.singlePage = res
      this.htmlStr = this.singlePage[0].content;
      this.gallery = this.singlePage[0].galleryData[0].images;
    })
  }
   
}
