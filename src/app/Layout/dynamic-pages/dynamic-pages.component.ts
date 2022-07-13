import { Component, OnInit } from '@angular/core';
import { GALLARY_IMAGE } from 'src/environments/constants/constants';
import { DynamicPageService } from './dynamic-page.service';

@Component({
  selector: 'app-dynamic-pages',
  templateUrl: './dynamic-pages.component.html',
  styleUrls: ['./dynamic-pages.component.scss']
})
export class DynamicPagesComponent implements OnInit {

  public singlePage : any;
  public gallaryDetails : any;
  public gallery_path : any;

  constructor(public siglePageTitle : DynamicPageService , public gallery: DynamicPageService  ) { }

  ngOnInit(): void {
    this.getPage()
    // this.getgallery()
  }

  // async getgallery(){
  //   this.gallery_path = GALLARY_IMAGE
  //   const result = this.gallery.list().subscribe(res=>{
  //     this.gallaryDetails = res
  //     console.log(res)
  //   })
  // }

  async getPage() {
    this.siglePageTitle.list().subscribe(res => {
      this.singlePage = res
    })
  }
 
}
