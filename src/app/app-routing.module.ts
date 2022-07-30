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
import { G1Component } from './views/job-oppertunities/job-positions/g1/g1.component';
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
import { G4Component } from './views/job-oppertunities/job-positions/g4/g4.component';


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
  { path:'G1',component:G1Component},
  { path:'G4',component:G4Component},
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
  { path:'General tiers', component:GeneralTiresComponent},
  { path:'Gulf Great Sands Launches Premium Brand ‘’BESTUNE’’ in Oman.', component:Id1Component},
  { path:'All-new Nissan Sunny 2020 now available in Oman', component:Id2Component},
  { path:'Nissan Maxima delivers brilliant tech-powered performance, class-leading design and safety features', component:Id3Component},
  { path:'Personalise your Nissan to suit your taste from a wide selection of genuine accessories', component:Id4Component},
  { path:'Foton View CS2 Mini-Bus 13 Seater, Foton View CS2 Cargo Van impress with their Efficiency and Performance', component:Id5Component},
  { path:'Nissan honoured with Oman’s Most Trusted Brand for fourth consecutive year', component:Id6Component},
  { path:'Gulf Great Sands LLC brings iconic Foton Aumark – Light Duty Truck to Oman', component:Id7Component},
  { path:'All-new 2020 Nissan Patrol with enhanced design and mobility launched in Oman', component:Id8Component},
  { path:'All-new BAIC X35 Crossover 2020 MY Launched in Oman by Gulf Great Sands', component:Id9Component},
  { path:'New Renault MASTER PRACTICAL, TOUGH AND VERSATILE: GCC LAUNCH', component:Id10Component},
  { path:'NEW 2019 NISSAN MAXIMA LAUNCHED', component:Id11Component},
  { path:"INFINITI Oman's Ramadan promotion inspires sharing meaningful moments",component:Id12Component},
  { path:'All-New 2019 Nissan Altima Makes its Oman Debut', component:Id13Component},
  { path:'Gulf Great Sands LLC appointed as exclusive distributor for Foton commercial vehicles in Oman',component:Id14Component},
  { path:"INFINITI QX50 wins 'Best Luxury Crossover of the Year' at Signature's The Luxury 100 award", component:Id15Component},
  { path:'Avail attractive offer on premium crossover INFINITI QX30', component:Id16Component},
  { path:'Suhail Bahwan Automobiles & Takaful Insurance Company tie-up to offer dealership repairs for customers.', component:Id17Component},
  { path:'All new premium SUV INFINITI QX50 arrives in Oman', component:Id18Component},
  { path:'INFINTI Q60 sports coupe: Inspiring personalized experience behind wheel', component:Id19Component},
  { path:'INFINTI Q60 sports coupe: Inspiring personalized experience behind wheel', component:Id20Component},
  { path:'Strategic Partnership agreement signed between Suhail Bahwan Automobiles and Al Ahlia Insurance Company.', component:Id21Component},
  { path:'Infiniti QX30: a premium active crossover for all purposes launched in Oman',component:Id22Component},
  { path:'INFINITI Oman announces special offer on Q50, Q70 and QX70',component:Id23Component},
  { path:'Popular Pre-Owned Cars New Mobile App Launched with lots of Beneficial Features',component:Id24Component},
  { path:'New QX80 evolves INFINITI’s presence in luxury SUV segment in Oman', component:Id25Component},
  { path:'Renault TAHADI 2018… Proficient Employees are Vital for a Superior Customer Experience',component:Id26Component},
  { path:'Renault Vehicles Now Available at Motor Souq Showrooms',component:Id27Component},
  { path:'Gulf Advantage Automobiles boosts Renault presences in KSA with two new \"Taajeer\" agreements', component:Id28Component},
  { path:'Nissan GT-R NISMO, a supercar engineered to dominate, now in Oman', component:Id29Component},
  { path:'Infiniti QX80 makes Oman debut', component:Id30Component},
  { path:"Gulf Advantage Automobiles offers 'Buy now and your VAT is on us' scheme for its entire Renault Passenger Cars range",component:Id31Component},
  { path:"Infiniti Q60 gets ‘Dynamic Coupe of the year’ at Signature’s The Luxury 100 award",component:Id32Component},
  { path:"Customer modifies BAIC BJ40 for added adventure", component:Id33Component},
  { path:"Luxury sedan Infiniti Q70: Amazing discerning customers all the way", component:Id34Component},
  { path:"Gulf Advantage Automobiles Honored with 'Best Marketing Initiative Award' at the 2017 Renault Middle East Convention", component:Id35Component},
  { path:"Nissan wins two honours at Oman’s Most Trusted Brands Awards", component:Id36Component},
  { path:"Renault Koleos: All the Hallmarks of a Charismatic SUV with Style, Comfort, and Advanced Technologies",component:Id37Component},
  { path:"New Renault ZOE Long Range model arrives in the Middle East", component:Id38Component},
  { path:"Gulf Advantage Automobiles Inaugurates a New Renault Store in Abha", component:Id39Component},
  { path:"The new INFINITI Q50 is designed to push you further",component:Id40Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
