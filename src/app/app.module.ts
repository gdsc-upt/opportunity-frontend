import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BannerComponent } from './pages/about-page/components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
