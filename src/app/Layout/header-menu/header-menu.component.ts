import { Component, OnInit } from '@angular/core';
import { HeaderMenuService } from './header-menu.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  public HeaderMenuDetails: any;

  constructor(public headerMenu: HeaderMenuService) { }

  ngOnInit(): void {

    this.getheaderMenu()

  }

  async getheaderMenu() {
    this.headerMenu.list().subscribe(res => {
      this.HeaderMenuDetails = res
    })
  }

 




}
