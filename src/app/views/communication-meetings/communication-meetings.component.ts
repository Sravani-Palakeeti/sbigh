import { Component, OnInit } from '@angular/core';
import { GALLERY_IMAGE } from 'src/environments/constants/constants';
import { CommunicationMeetingsService } from './communication-meetings.service';

@Component({
  selector: 'app-communication-meetings',
  templateUrl: './communication-meetings.component.html',
  styleUrls: ['./communication-meetings.component.scss']
})
export class CommunicationMeetingsComponent implements OnInit {

  public singlePage : any
  public htmlStr:any
  gallery: any;
  public gallery_path = GALLERY_IMAGE
  constructor( public singlePageTitle : CommunicationMeetingsService) { }

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
