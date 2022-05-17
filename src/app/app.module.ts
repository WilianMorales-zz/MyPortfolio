import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyWorkComponent } from './components/pages/my-work/my-work.component';
import { WebSkillComponent } from './components/pages/web-skill/web-skill.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { AboutComponent } from './components/pages/about/about.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyWorkComponent,
    WebSkillComponent,
    FooterComponent,
    LoadingComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
