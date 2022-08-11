import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/Services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public copyRight:any
  public allsettings:any
  constructor(private copy:SettingsService) { }

  ngOnInit(): void {
    this.getcopy()
  }

  async getcopy(){
   this.copy.list().subscribe(res=>{
  this.allsettings=res
  this.copyRight=this.allsettings[6]['settingValue']
   })
  }
  
}
