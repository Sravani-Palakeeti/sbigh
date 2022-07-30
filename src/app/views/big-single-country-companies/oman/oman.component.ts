import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { OmanService } from './oman.service';

@Component({
  selector: 'app-oman',
  templateUrl: './oman.component.html',
  styleUrls: ['./oman.component.scss']
})
export class OmanComponent implements OnInit {
  public title : string =  'Our Companies'
  public companyName : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor ( public singleCountry : OmanService) { }

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
