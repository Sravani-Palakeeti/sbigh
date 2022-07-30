import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { EmployeeEngagementSurveyService } from './employee-engagement-survey.service';

@Component({
  selector: 'app-employee-engagement-survey',
  templateUrl: './employee-engagement-survey.component.html',
  styleUrls: ['./employee-engagement-survey.component.scss']
})
export class EmployeeEngagementSurveyComponent implements OnInit {

  
  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : EmployeeEngagementSurveyService) { }

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
