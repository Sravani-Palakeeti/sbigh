import { Component, OnInit } from '@angular/core';
import { JoblistService } from 'src/app/Services/joblist.service';

@Component({
  selector: 'app-g1',
  templateUrl: './g1.component.html',
  styleUrls: ['./g1.component.scss']
})
export class G1Component implements OnInit {

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

    this.htmlStr = this.jobs.data[4].content
  
    })
  }

}
