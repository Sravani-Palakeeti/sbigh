import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { IraqService } from './iraq.service';


@Component({
  selector: 'app-iraq',
  templateUrl: './iraq.component.html',
  styleUrls: ['./iraq.component.scss']
})
export class IraqComponent implements OnInit {

  public title : string =  'Our Companies'
  public companyName : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor ( public singleCountry : IraqService) { }

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
