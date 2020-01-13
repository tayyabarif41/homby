import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApartComponent } from './apart/apart.component';
import { ContractorComponent } from './contractor/contractor.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { MortgageComponent } from './mortgage/mortgage.component';
import { ArchitectsComponent } from './architects/architects.component';
import { CompareComponent } from './compare/compare.component';
import { UpdatesBenefitsComponent } from './updates-benefits/updates-benefits.component';
import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { ContactFormComponent } from '../../shared/contact-form/contact-form.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule }   from '@angular/forms';
import * as jquery from 'jquery';
import { HeaderComponent } from 'src/app/modules/english/shared/header/header.component';

const routes: Routes = [
  {
    path:'', component: LayoutComponent,
    children: [ 
       {
      path: 'apart', component: ApartComponent
    },
    {
      path: 'archi', component: ArchitectsComponent
    },
    {
      path: 'compare', component: CompareComponent
    },
    {
      path: 'contractor', component: ContractorComponent
    },
    {
      path: 'mortgage', component: MortgageComponent
    },
    {
      path: 'updatebenefits', component: UpdatesBenefitsComponent
    },
    {
      path: 'shopping', component: ShoppingComponent
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'buy', component: BuyComponent
    },
    {
      path:'header', component: HeaderComponent
    }
   ]
  },

];


@NgModule({
  declarations: [
    HeaderComponent,
    ContactFormComponent,ApartComponent, ContractorComponent, ShoppingComponent, MortgageComponent, ArchitectsComponent, CompareComponent, UpdatesBenefitsComponent, HomeComponent, BuyComponent, LayoutComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule
  ],
  exports: [ RouterModule ],
})
export class ServiceModule { }
