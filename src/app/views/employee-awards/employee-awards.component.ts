import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { EmployeeAwardService } from './employee-award.service';

@Component({
  selector: 'app-employee-awards',
  templateUrl: './employee-awards.component.html',
  styleUrls: ['./employee-awards.component.scss']
})
export class EmployeeAwardsComponent implements OnInit {

  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : EmployeeAwardService) { }

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
