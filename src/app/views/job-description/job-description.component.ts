import { Component, OnInit } from '@angular/core';
import { JoblistService } from 'src/app/Services/joblist.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss']
})
export class JobDescriptionComponent implements OnInit {
 
  public jobs : any
  htmlStr: any;
  htmlStr1: any

  constructor( public jobsList : JoblistService ) { }

  ngOnInit(): void {
    this.getjobList()
  }
  getjobList(){
    this.jobsList.list().subscribe(res => {
      this.jobs = res
    
    // this.htmlStr =  res.data[0].content
    this.htmlStr = this.jobs.data[1].content
    this.htmlStr = this.jobs.data[0].content
    })
  }
}
