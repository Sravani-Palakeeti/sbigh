import { Component, OnInit } from '@angular/core';
import { HeritageService } from './heritage.service';

@Component({
  selector: 'app-heritage',
  templateUrl: './heritage.component.html',
  styleUrls: ['./heritage.component.scss']
})
export class HeritageComponent implements OnInit {
  
public singlePage : any

  constructor( public singlePageTitle: HeritageService ) { }

  ngOnInit(): void {
    this.getpage()
  }

  getpage(){
    this.singlePageTitle.list().subscribe(res => {
      this.singlePage = res
    })
  }
}
