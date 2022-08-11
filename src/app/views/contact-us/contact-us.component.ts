import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactusService } from './contactus.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {

  FormData: any;
  fullname: any;
  email: any;
  phone:any;
  brand:any;
  subject:any
  message:any

  constructor(
    private builder: FormBuilder,
    private apiService:ContactusService,
    private toastr: ToastrService
      ) { 
    this.FormData = this.builder.group({
      fullname : this.fullname,
      email: this.email,
      phone:this.phone,
      brand:this.brand,
      subject:this.subject,
      message:this.message
    })
  }

  onSubmit(FormData: any) {
    this.apiService.PostMessage(FormData).subscribe(data => {
      this.toastr.success(data.message);
      // this.toastr.error(data.message);
  })  
}

  ngOnInit() {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9]$')]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      message: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
      brand: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required])
    })
  }
  
}
