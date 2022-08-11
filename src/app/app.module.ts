import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ReactiveFormsModule } from '@angular/forms';

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
import { DynamicPagesComponent } from './Layout/dynamic-pages/dynamic-pages.component';
import { BigCompaniesComponent } from './views/big-companies/big-companies.component';
import { OurBrandsComponent} from './views/our-brands/our-brands.component'
import { MultiCountryOperatationsComponent } from './views/multi-country-operatations/multi-country-operatations.component';
import { HeritageComponent } from './views/heritage/heritage.component';
import { VisionComponent } from './views/vision/vision.component';
import { WorldTravelMarketComponent } from './views/world-travel-market/world-travel-market.component';
import { ArabianTravelMarketComponent } from './views/arabian-travel-market/arabian-travel-market.component';
import { TrafficExpoComponent } from './views/traffic-expo/traffic-expo.component';
import { JobexComponent } from './views/jobex/jobex.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { TrainingComponent } from './views/training/training.component';
import { NationalHumanCapitalComponent } from './views/national-human-capital/national-human-capital.component';
import { CareerpathComponent } from './views/careerpath/careerpath.component';
import { WorkingWithBigComponent } from './views/working-with-big/working-with-big.component';
import { JobOppertunitiesComponent } from './views/job-oppertunities/job-oppertunities.component';
import { OpmexComponent } from './views/opmex/opmex.component';
import { JobDescriptionComponent } from './views/job-description/job-description.component';
import { OmanComponent } from './views/big-single-country-companies/oman/oman.component';
import { ArabianGulfAutomobileComponent } from './views/big-single-country-companies/arabian-gulf-automobile/arabian-gulf-automobile.component';
import { EmployeeAwardsComponent } from './views/employee-awards/employee-awards.component';
import { SkillContestComponent } from './views/skill-contest/skill-contest.component';
import { RecreationActivitiesComponent } from './views/recreation-activities/recreation-activities.component';
import { CommunicationMeetingsComponent } from './views/communication-meetings/communication-meetings.component';
import { UaeComponent } from './views/big-single-country-companies/uae/uae.component';
import { KsaComponent } from './views/big-single-country-companies/ksa/ksa.component';
import { IraqComponent } from './views/big-single-country-companies/iraq/iraq.component';
import { LibyaComponent } from './views/big-single-country-companies/libya/libya.component';
import { CarSuvComponent } from './views/brand-page-by-type/car-suv/car-suv.component';
import { CommercialVehicleComponent } from './views/brand-page-by-type/commercial-vehicle/commercial-vehicle.component';
import { ConstructionComponent } from './views/brand-page-by-type/construction/construction.component';
import { ProductsComponent } from './views/brand-page-by-type/products/products.component';
import { ServicesComponent } from './views/brand-page-by-type/services/services.component';
import { NissanComponent } from './views/brand-page-by-type/brands/nissan/nissan.component';
import { PressReleaseComponent } from './views/press-release/press-release.component';
import { DynamicViewsComponent } from './views/dynamic-views/dynamic-views.component';
import { InfinityComponent } from './views/brand-page-by-type/brands/infinity/infinity.component';
import { HomePagePressReleasesComponent } from './views/home-page-press-releases/home-page-press-releases.component';
import {MatCardModule} from '@angular/material/card';
import { EmployeeConnectComponent } from './views/employee-connect/employee-connect.component';
import { EmployeeEngagementSurveyComponent } from './views/employee-engagement-survey/employee-engagement-survey.component';
import { RenaultComponent } from './views/brand-page-by-type/brands/renault/renault.component';
import { FawBestuneComponent } from './views/brand-page-by-type/brands/faw-bestune/faw-bestune.component';
import { ChanganComponent } from './views/brand-page-by-type/brands/changan/changan.component';
import { BAICComponent } from './views/brand-page-by-type/brands/baic/baic.component';
import { FotonComponent } from './views/brand-page-by-type/brands/foton/foton.component';
import { IvecoComponent } from './views/brand-page-by-type/brands/iveco/iveco.component';
import { PopularCarComponent } from './views/brand-page-by-type/brands/popular-car/popular-car.component';
import { MotammadCarsComponent } from './views/brand-page-by-type/brands/motammad-cars/motammad-cars.component';
import { CaseComponent } from './views/brand-page-by-type/brands/case/case.component';
import { TcmForkliftComponent } from './views/brand-page-by-type/brands/tcm-forklift/tcm-forklift.component';
import { WackerNeusonComponent } from './views/brand-page-by-type/brands/wacker-neuson/wacker-neuson.component';
import { TopconComponent } from './views/brand-page-by-type/brands/topcon/topcon.component';
import { SillaComponent } from './views/brand-page-by-type/brands/silla/silla.component';
import { SimpedilComponent } from './views/brand-page-by-type/brands/simpedil/simpedil.component';
import { KyotoComponent } from './views/brand-page-by-type/brands/kyoto/kyoto.component';
import { LukoilComponent } from './views/brand-page-by-type/brands/lukoil/lukoil.component';
import { DetaComponent } from './views/brand-page-by-type/brands/deta/deta.component';
import { AmaronComponent } from './views/brand-page-by-type/brands/amaron/amaron.component';
import { AutorentComponent } from './views/brand-page-by-type/brands/autorent/autorent.component';
import { AutofinanceComponent } from './views/brand-page-by-type/brands/autofinance/autofinance.component';
import { GeneralTiresComponent } from './views/brand-page-by-type/brands/general-tires/general-tires.component';
import { G3CodeComponent } from './views/job-oppertunities/job-positions/g3-code/g3-code.component';
import { Id1Component } from './views/press-release/news/id1/id1.component';
import { Id2Component } from './views/press-release/news/id2/id2.component';
import { Id3Component } from './views/press-release/news/id3/id3.component';
import { Id4Component } from './views/press-release/news/id4/id4.component';
import { Id5Component } from './views/press-release/news/id5/id5.component';
import { Id6Component } from './views/press-release/news/id6/id6.component';
import { Id7Component } from './views/press-release/news/id7/id7.component';
import { Id8Component } from './views/press-release/news/id8/id8.component';
import { Id9Component } from './views/press-release/news/id9/id9.component';
import { Id10Component } from './views/press-release/news/id10/id10.component';
import { Id11Component } from './views/press-release/news/id11/id11.component';
import { Id12Component } from './views/press-release/news/id12/id12.component';
import { Id13Component } from './views/press-release/news/id13/id13.component';
import { Id14Component } from './views/press-release/news/id14/id14.component';
import { Id15Component } from './views/press-release/news/id15/id15.component';
import { Id16Component } from './views/press-release/news/id16/id16.component';
import { Id17Component } from './views/press-release/news/id17/id17.component';
import { Id18Component } from './views/press-release/news/id18/id18.component';
import { Id19Component } from './views/press-release/news/id19/id19.component';
import { Id20Component } from './views/press-release/news/id20/id20.component';
import { Id21Component } from './views/press-release/news/id21/id21.component';
import { Id22Component } from './views/press-release/news/id22/id22.component';
import { Id23Component } from './views/press-release/news/id23/id23.component';
import { Id24Component } from './views/press-release/news/id24/id24.component';
import { Id25Component } from './views/press-release/news/id25/id25.component';
import { Id26Component } from './views/press-release/news/id26/id26.component';
import { Id27Component } from './views/press-release/news/id27/id27.component';
import { Id28Component } from './views/press-release/news/id28/id28.component';
import { Id29Component } from './views/press-release/news/id29/id29.component';
import { Id30Component } from './views/press-release/news/id30/id30.component';
import { Id31Component } from './views/press-release/news/id31/id31.component';
import { Id32Component } from './views/press-release/news/id32/id32.component';
import { Id33Component } from './views/press-release/news/id33/id33.component';
import { Id34Component } from './views/press-release/news/id34/id34.component';
import { Id35Component } from './views/press-release/news/id35/id35.component';
import { Id36Component } from './views/press-release/news/id36/id36.component';
import { Id37Component } from './views/press-release/news/id37/id37.component';
import { Id38Component } from './views/press-release/news/id38/id38.component';
import { Id39Component } from './views/press-release/news/id39/id39.component';
import { Id40Component } from './views/press-release/news/id40/id40.component';
import { G1Component } from './views/job-oppertunities/job-positions/g1/g1.component';
import { G4Component } from './views/job-oppertunities/job-positions/g4/g4.component';
import { TopHeaderComponent } from './Layout/top-header/top-header.component';

import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    HomepageBannersComponent,
    DynamicPagesComponent,
    BigCompaniesComponent,
    OurBrandsComponent,
    MultiCountryOperatationsComponent,
    HeritageComponent,
    VisionComponent,
    WorldTravelMarketComponent,
    ArabianTravelMarketComponent,
    TrafficExpoComponent,
    JobexComponent,
    ContactUsComponent,
    TrainingComponent,
    NationalHumanCapitalComponent,
    CareerpathComponent,
    WorkingWithBigComponent,
    JobOppertunitiesComponent,
    OpmexComponent,
    JobDescriptionComponent,
    OmanComponent,
    ArabianGulfAutomobileComponent,
    EmployeeAwardsComponent,
    SkillContestComponent,
    RecreationActivitiesComponent,
    CommunicationMeetingsComponent,
    UaeComponent,
    KsaComponent,
    IraqComponent,
    LibyaComponent,
    CarSuvComponent,
    CommercialVehicleComponent,
    ConstructionComponent,
    ProductsComponent,
    ServicesComponent,
    NissanComponent,
    PressReleaseComponent,
    DynamicViewsComponent,
    InfinityComponent,
    HomePagePressReleasesComponent,
    EmployeeConnectComponent,
    EmployeeEngagementSurveyComponent,
    RenaultComponent,
    FawBestuneComponent,
    ChanganComponent,
    BAICComponent,
    FotonComponent,
    IvecoComponent,
    PopularCarComponent,
    MotammadCarsComponent,
    CaseComponent,
    TcmForkliftComponent,
    WackerNeusonComponent,
    TopconComponent,
    SillaComponent,
    SimpedilComponent,
    KyotoComponent,
    LukoilComponent,
    DetaComponent,
    AmaronComponent,
    AutorentComponent,
    AutofinanceComponent,
    GeneralTiresComponent,
    G3CodeComponent,
    Id1Component,
    Id2Component,
    Id3Component,
    Id4Component,
    Id5Component,
    Id6Component,
    Id7Component,
    Id8Component,
    Id9Component,
    Id10Component,
    Id11Component,
    Id12Component,
    Id13Component,
    Id14Component,
    Id15Component,
    Id16Component,
    Id17Component,
    Id18Component,
    Id19Component,
    Id20Component,
    Id21Component,
    Id22Component,
    Id23Component,
    Id24Component,
    Id25Component,
    Id26Component,
    Id27Component,
    Id28Component,
    Id29Component,
    Id30Component,
    Id31Component,
    Id32Component,
    Id33Component,
    Id34Component,
    Id35Component,
    Id36Component,
    Id37Component,
    Id38Component,
    Id39Component,
    Id40Component,
    G1Component,
    G4Component,
    TopHeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
