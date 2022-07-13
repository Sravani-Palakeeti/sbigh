import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Layout/main/main.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HeaderMenuComponent } from './Layout/header-menu/header-menu.component';
import { FooterComponent } from './Layout/footer/footer.component';

import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { HomepageBannersComponent } from './views/homepage-banners/homepage-banners.component';
import { BigBrandsComponent } from './views/big-brands/big-brands.component';
import { DynamicPagesComponent } from './Layout/dynamic-pages/dynamic-pages.component';
import { BigCompaniesComponent } from './views/big-companies/big-companies.component';
import { MultiCountryOperatationsComponent } from './views/multi-country-operatations/multi-country-operatations.component';
import { HeritageComponent } from './views/heritage/heritage.component';
import { VisionComponent } from './views/vision/vision.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    HomepageBannersComponent,
    BigBrandsComponent,
    DynamicPagesComponent,
    BigCompaniesComponent,
    MultiCountryOperatationsComponent,
    HeritageComponent,
    VisionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
