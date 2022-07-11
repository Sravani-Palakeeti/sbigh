import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './Layout/main/main.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HeaderMenuComponent } from './Layout/header-menu/header-menu.component';
import { FooterComponent } from './Layout/footer/footer.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { HomepageBannersComponent } from './views/homepage-banners/homepage-banners.component';
import { BigBrandsComponent } from './views/big-brands/big-brands.component';
import { DynamicPagesComponent } from './Layout/dynamic-pages/dynamic-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    HomepageBannersComponent,
    BigBrandsComponent,
    DynamicPagesComponent
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
