import { Component, OnInit } from '@angular/core';
import { DynamicPageService } from './dynamic-page.service';

@Component({
  selector: 'app-dynamic-pages',
  templateUrl: './dynamic-pages.component.html',
  styleUrls: ['./dynamic-pages.component.scss']
})
export class DynamicPagesComponent implements OnInit {

  public singlePage : any;

  constructor(public siglePageTitle : DynamicPageService) { }

  ngOnInit(): void {
    this.getPage()
  }

  async getPage() {
    this.siglePageTitle.list().subscribe(res => {
      this.singlePage = res
      console.log(res)
    })
  }

}
