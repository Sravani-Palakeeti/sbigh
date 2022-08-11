import { Component, OnInit } from '@angular/core';
import { JoblistService } from 'src/app/Services/joblist.service';
import { JoboppertunitiesService } from './joboppertunities.service';

@Component({
  selector: 'app-job-oppertunities',
  templateUrl: './job-oppertunities.component.html',
  styleUrls: ['./job-oppertunities.component.scss']
})

export class JobOppertunitiesComponent implements OnInit {

  public singlePage : any
  public htmlStr:any
  public jobs : any
  
  constructor( public singlePageTitle : JoboppertunitiesService , public jobsList : JoblistService) { }

  ngOnInit(): void {
    this.getpage()
    this.getjobList()
  }
  getpage(){
    this.singlePageTitle.list().subscribe(res => {
      this.singlePage = res
      this.htmlStr = this.singlePage[0].content
    })
  }

  getjobList(){
    this.jobsList.list().subscribe(res => {
      this.jobs = res.data
    })
  }

}
