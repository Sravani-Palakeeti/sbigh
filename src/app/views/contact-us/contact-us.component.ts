import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { API_URL } from 'src/environments/constants/constants';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  FormData: any;
  contact: any;
  fullname: any;
  email: any;
  phone:any;
  brand:any;
  subject:any
  message:any

  constructor(private builder: FormBuilder) { 
    this.FormData = this.builder.group({
      fullname : this.fullname,
      email: this.email,
      phone:this.phone,
      brand:this.brand,
      subject:this.subject,
      message:this.message
    })
    console.log(this.FormData)
  }

  // onSubmit(FormData: NgForm) {
  onSubmit(FormData: any) {
    // if(FormData.valid){
    console.log(FormData)
    this.contact.PostMessage(FormData).subscribe((response: any) => {
      // location.href = 'https://mailthis.to/confirm'
      location.href = API_URL + 'contact_us'
      console.log(response)
    },
      (error: any) => {
        console.warn(error.responseText)
        console.log({ error })
      })
    // }
  }
  ngOnInit() {
    this.FormData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required])
    })
  }
  

}
