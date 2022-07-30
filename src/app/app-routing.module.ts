import { NgModule, SimpleChange } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicPagesComponent } from './Layout/dynamic-pages/dynamic-pages.component';
import { ArabianTravelMarketComponent } from './views/arabian-travel-market/arabian-travel-market.component';
import { TrafficExpoComponent } from './views/traffic-expo/traffic-expo.component';
import { BigCompaniesComponent } from './views/big-companies/big-companies.component';
import { HeritageComponent } from './views/heritage/heritage.component';
import { HomepageBannersComponent } from './views/homepage-banners/homepage-banners.component';
import { MultiCountryOperatationsComponent } from './views/multi-country-operatations/multi-country-operatations.component';
import { VisionComponent } from './views/vision/vision.component';
import { WorldTravelMarketComponent } from './views/world-travel-market/world-travel-market.component';
import { JobexComponent } from './views/jobex/jobex.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { TrainingComponent } from './views/training/training.component';
import { NationalHumanCapitalComponent } from './views/national-human-capital/national-human-capital.component';
import { CareerpathComponent } from './views/careerpath/careerpath.component';
import { WorkingWithBigComponent } from './views/working-with-big/working-with-big.component';
import { JobOppertunitiesComponent } from './views/job-oppertunities/job-oppertunities.component';
import { OpmexComponent } from './views/opmex/opmex.component';
import { OurBrandsComponent } from './views/our-brands/our-brands.component';
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


const routes: Routes = [
  
  { path:'', component: HomepageBannersComponent},
  { path:'Corporate Overview', component: DynamicPagesComponent},
  { path:'Heritage & Ownership', component: HeritageComponent},
  { path:'Vision, Mission and Values', component: VisionComponent},
  { path:'Training & Development', component:TrainingComponent},
  { path:'National Human Capital', component:NationalHumanCapitalComponent},
  { path:'Career Path', component:CareerpathComponent},
  { path:'Employee Awards', component:EmployeeAwardsComponent},
  { path:'Skill Contest', component:SkillContestComponent},
  { path:'Employee connect', component:EmployeeConnectComponent},
  { path:'Employee Engagement Survey', component:EmployeeEngagementSurveyComponent},
  { path:'Recreation Activities', component:RecreationActivitiesComponent},
  { path:'Communication Meetings', component:CommunicationMeetingsComponent},
  { path:'big-brands', component: OurBrandsComponent},
  { path:'big-comapanies', component:BigCompaniesComponent},  
  { path: 'multi-country-operations', component: MultiCountryOperatationsComponent },
  { path:'Press Releases', component: PressReleaseComponent},
  { path:'World Travel Market', component:WorldTravelMarketComponent},
  { path:'Arabian Travel Market', component:ArabianTravelMarketComponent},
  { path:'Traffic Expo', component:TrafficExpoComponent},
  { path:'JOBEX', component:JobexComponent},
  { path:'OPMEX', component:OpmexComponent},
  { path:'Working with BIGH', component:WorkingWithBigComponent},
  { path:'Job Opportunities', component:JobOppertunitiesComponent},
  { path:'G3', component:G3CodeComponent},
  { path:'G2', component:G3CodeComponent},
  // { path:'View Description & Apply', component:JobDescriptionComponent},
  { path:'CONTACT US, contact', component:ContactUsComponent},
  { path:'contact', component:ContactUsComponent},
  { path:'oman', component:OmanComponent},
  { path:'Arabian Gulf Automobiles & Equipment',component:ArabianGulfAutomobileComponent},
  { path:'UAE', component:UaeComponent},
  { path:'KSA', component:KsaComponent},
  { path:'iraq', component:IraqComponent},
  { path:'libya', component:LibyaComponent},
  { path:'Car & SUVs', component:CarSuvComponent},
  { path:'Commercial Vehicle', component:CommercialVehicleComponent},
  { path:'Construction', component:ConstructionComponent},
  { path:'prodcucts', component:ProductsComponent},
  { path:'services', component:ServicesComponent},
  { path:'Nissan', component:NissanComponent},
  { path:'INFINITI', component:InfinityComponent},
  { path:'Renault', component:RenaultComponent},
  { path:'FAW-Bestune', component:FawBestuneComponent},
  { path:'Changan', component:ChanganComponent},
  { path:'BAIC', component:BAICComponent},
  { path:'Foton', component:FotonComponent},
  { path:'IVECO', component:IvecoComponent},
  { path:'Popular Pre-owned Cars', component:PopularCarComponent},
  { path:'Moatamad-Pre-Owned Cars', component:MotammadCarsComponent},
  { path:'Case', component:CaseComponent},
  { path:'TCM Forklift', component:TcmForkliftComponent},
  { path:'Wacker Neuson', component:WackerNeusonComponent},
  { path:'TOPCON', component:TopconComponent},
  { path:'Silla', component:SillaComponent},
  { path:'Simpedil', component:SimpedilComponent},
  { path:'Kyoto', component:KyotoComponent},
  { path:'Lukoil', component:LukoilComponent},
  { path:'Deta', component:DetaComponent},
  { path:'Amaron', component:AmaronComponent},
  { path:'Autorent', component:AutorentComponent},
  { path:'AUTOFINANCE', component:AutofinanceComponent},
  { path:'General tiers', component:GeneralTiresComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
