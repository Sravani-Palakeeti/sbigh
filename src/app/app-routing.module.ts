import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicPagesComponent } from './Layout/dynamic-pages/dynamic-pages.component';
import { BigBrandsComponent } from './views/big-brands/big-brands.component';
import { BigCompaniesComponent } from './views/big-companies/big-companies.component';
import { HeritageComponent } from './views/heritage/heritage.component';
import { HomepageBannersComponent } from './views/homepage-banners/homepage-banners.component';
import { MultiCountryOperatationsComponent } from './views/multi-country-operatations/multi-country-operatations.component';
import { VisionComponent } from './views/vision/vision.component';

const routes: Routes = [
  
  { path:'', component: HomepageBannersComponent},
  { path:'big-brands', component: BigBrandsComponent},
  { path:'big-comapanies', component:BigCompaniesComponent},  
  { path: 'multi-country-operations', component: MultiCountryOperatationsComponent },
  { path:'Corporate Overview', component: DynamicPagesComponent},
  { path:'Heritage & Ownership', component: HeritageComponent},
  { path:'Vision, Mission and Values', component: VisionComponent},
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
