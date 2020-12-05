import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BannerComponent } from './pages/about-page/components/banner/banner.component';
import { TeamComponent } from './pages/about-page/components/team/team.component';
import { AboutComponent } from './pages/about-page/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    TeamComponent,
    BannerComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
