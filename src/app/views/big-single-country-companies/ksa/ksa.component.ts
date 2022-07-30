import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { KsaService } from './ksa.service';

@Component({
  selector: 'app-ksa',
  templateUrl: './ksa.component.html',
  styleUrls: ['./ksa.component.scss']
})
export class KsaComponent implements OnInit {

  
  public title : string =  'Our Companies'
  public companyName : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor ( public singleCountry : KsaService) { }

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
