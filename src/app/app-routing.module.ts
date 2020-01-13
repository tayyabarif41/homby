import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  
    { path: '',
      loadChildren: () => import('./modules/hebrew/hebrew.module').then(m => m.HebrewModule) 
    },
    { path: 'hb',
      loadChildren: () => import('./modules/hebrew/hebrew.module').then(m => m.HebrewModule) 
    },
    { path: 'eng',
      loadChildren: () => import('./modules/english/english.module').then(m => m.EnglishModule) 
    },
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
