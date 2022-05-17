import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

import { NAV_ROUTES } from './components/home/nav-routing.module';

const routes: Routes = [

  { path: '', component: HomeComponent, children: NAV_ROUTES },
  {
    path: "**", component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
