import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnglishComponent } from './english.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobileNavComponent } from './shared/mobile-nav/mobile-nav.component';
import { LanguageComponent } from './shared/language/language.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: EnglishComponent, children:[
      {
        path:'', component: HomeComponent
      } ,
      {
        path:'home', component: HomeComponent
      } ,
      {
        path:'services', loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule) 
      } 

    ]
  },
 
];

@NgModule({
  declarations: [
    EnglishComponent,
    HomeComponent,
    LayoutComponent,
    SidenavComponent,
    FooterComponent,
    MobileNavComponent,
    LanguageComponent,],
  imports: [
    RouterModule.forChild(routes),

    CommonModule
  ]
})
export class EnglishModule { }
