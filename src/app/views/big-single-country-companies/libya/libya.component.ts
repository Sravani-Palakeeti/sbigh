import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { LibyaService } from './libya.service';

@Component({
  selector: 'app-libya',
  templateUrl: './libya.component.html',
  styleUrls: ['./libya.component.scss']
})
export class LibyaComponent implements OnInit {
  public title : string =  'Our Companies'
  public companyName : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor ( public singleCountry : LibyaService) { }

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
