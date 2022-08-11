import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { JobApplyService } from 'src/app/Services/job-apply.service';
import { JoblistService } from 'src/app/Services/joblist.service';

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
  userName: any;
  userEmail:any;
  userPhone:any;
  resume:any;

  constructor(public jobsList: JoblistService,
     private builder: FormBuilder, 
     private apiService:JobApplyService,
     private toastr: ToastrService) { 
      this.FormData = this.builder.group({
        userName : this.userName,
        userEmail : this.userEmail,
        userPhone : this.userPhone,
        resume : this.resume
      })
     }

     onSubmit(FormData: any) {
      this.apiService.PostMessage(FormData).subscribe(data => {
        this.toastr.success(data.message);
      })  

  }

  ngOnInit(): void {
    // to get jobs list
    this.getjobList()

    // for submitting form to apply job
    this.FormData = this.builder.group({
    userName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9]$')]),
    userEmail:new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    userPhone:new FormControl('',[Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
    resume:new FormControl('',[Validators.required])
    })
  }
  
  getjobList() {
    this.jobsList.list().subscribe(res => {
      this.jobs = res
      this.htmlStr = this.jobs.data[5].content
    })
  }

}
