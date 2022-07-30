import { Component, OnInit, ViewChild } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { BigCompaniesService } from './big-companies.service';

@Component({
  selector: 'app-big-companies',
  templateUrl: './big-companies.component.html',
  styleUrls: ['./big-companies.component.scss']
})
export class BigCompaniesComponent implements OnInit {

  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  public isCollapsed = true;

  public title : string =  'Our Companies'
  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE

  
  constructor( public singlePageTitle : BigCompaniesService) { }

  ngOnInit(): void {
    this.getpage()
    
  }
  getpage(){
    this.singlePageTitle.list().subscribe(res => {
      this.singlePage = res
      // this.htmlStr = this.singlePage[0]['title']
      this.gallery = this.singlePage[0].galleryData[0].images
    })
  }

  getcountryList(country:any){
    http://45.9.191.123:3000/api/web/companies/byCountry/{country}
    

    alert(country)
    // allCountiresList
  }


}
