import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { JoblistService } from 'src/app/Services/joblist.service';
import { API_URL } from 'src/environments/constants/constants';

@Component({
  selector: 'app-g4',
  templateUrl: './g4.component.html',
  styleUrls: ['./g4.component.scss']
})
export class G4Component implements OnInit {

  public jobs: any
  htmlStr: any;
  htmlStr1: any

  FormData: any
  apply: any

  constructor(public jobsList: JoblistService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.getjobList()
    this.FormData = this.builder.group({
    userName: new FormControl('', [Validators.required]),
    userEmail:new FormControl('', [Validators.required, Validators.email]),
    userPhone:new FormControl('',[Validators.required]),
    resume:new FormControl('',[Validators.required])
    })
  }

  getjobList() {
    this.jobsList.list().subscribe(res => {
      this.jobs = res
      this.htmlStr = this.jobs.data[5].content
    })
  }

  onSubmit(FormData:any){
   console.log(FormData)
   this.apply.PostMessage(FormData).subscribe((Response:any)=>{
   location.href = API_URL+'jobs/apply'
   console.log(Response)
   },
   (error:any)=>{
    console.warn(error.responseText)
    console.log({error})
   })
  }
  
}
