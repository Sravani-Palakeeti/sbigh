import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { UaeService } from './uae.service';

@Component({
  selector: 'app-uae',
  templateUrl: './uae.component.html',
  styleUrls: ['./uae.component.scss']
})
export class UaeComponent implements OnInit {

  public title : string =  'Our Companies'
  public companyName : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor ( public singleCountry : UaeService) { }

  ngOnInit(): void {
    this.getCountry()
  }
  
   getCountry(){
    this.singleCountry.list().subscribe(res => {
      this.companyName =  res
      this.gallery = this.companyName[0].galleryData[0].images
    })
   }

}
