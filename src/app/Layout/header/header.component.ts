import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/Services/settings.service';
import { ASSETS } from 'src/environments/constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public allsettings:any
  public mail:any 
  public number:any
  public assets =ASSETS;
  public fb:any
  public linkedin:any
  public youtube:any
  public twitter:any
  
  constructor(private setting:SettingsService) { }

  ngOnInit(): void {
    this.getsetting()
  }
  async getsetting(){
   this.setting.list().subscribe(res=>{
    this.allsettings=res
    this.mail = this.allsettings[2]['settingValue']
    this.number = this.allsettings[1]['settingValue']
    this.fb = this.allsettings[5]['settingValue']
    this.linkedin = this.allsettings[20]['settingValue']
    this.youtube = this.allsettings[3]['settingValue']
    this.twitter = this.allsettings[4]['settingValue']
   
   })
 }
 
}
