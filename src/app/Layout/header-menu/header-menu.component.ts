import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/Services/settings.service';
import { HeaderMenuService } from './header-menu.service';
import { ASSETS } from 'src/environments/constants/constants';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  public HeaderMenuDetails: any;
  public logoImg:any;
  settings: any;
  public assets =ASSETS;
  public value : any

  constructor(public headerMenu: HeaderMenuService, public logo: SettingsService)  { }

  ngOnInit(): void {

    this.getheaderMenu()
    this.getlogo()
  }

  async getlogo(){
    this.logo.list().subscribe(res=>{
      this.logoImg = res
      this.settings = 'settings/'+this.logoImg[21]['settingValue']
    })
  }

  async getheaderMenu() {
    this.headerMenu.list().subscribe(res => {
      this.HeaderMenuDetails = res
    })
  }

}
