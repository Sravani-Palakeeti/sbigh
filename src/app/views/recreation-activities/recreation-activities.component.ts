import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { RecreationActivitiesService } from './recreation-activities.service';

@Component({
  selector: 'app-recreation-activities',
  templateUrl: './recreation-activities.component.html',
  styleUrls: ['./recreation-activities.component.scss']
})
export class RecreationActivitiesComponent implements OnInit {

  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : RecreationActivitiesService) { }

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
