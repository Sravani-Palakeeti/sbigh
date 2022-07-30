import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { OmanService } from '../oman/oman.service';

@Component({
  selector: 'app-arabian-gulf-automobile',
  templateUrl: './arabian-gulf-automobile.component.html',
  styleUrls: ['./arabian-gulf-automobile.component.scss']
})
export class ArabianGulfAutomobileComponent implements OnInit {

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
      this.htmlStr = this.companyName[0].content
      this.gallery = this.companyName[0].galleryData[0].images
    })
   }

}
