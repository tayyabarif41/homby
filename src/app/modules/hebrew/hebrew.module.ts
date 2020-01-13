import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobileNavComponent } from './shared/mobile-nav/mobile-nav.component';
import { LanguageComponent } from './shared/language/language.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { HebrewComponent } from './hebrew.component';
import { AppComponent } from 'src/app/app.component';
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:[
      {
        path:'', component: HomeComponent
      } ,
      {
        path:'home', component: HomeComponent
      } ,
      {
        path:'services', loadChildren: () => import('../hebrew/pages/service/service.module').then(m => m.ServiceModule) 
      } 

    ]
  },
 
];

@NgModule({
  declarations: [
    LayoutComponent,
    HebrewComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    MobileNavComponent,
    LanguageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HebrewModule { }
