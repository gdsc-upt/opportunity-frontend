import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BannerComponent } from './pages/about-page/components/banner/banner.component';
import { TeamComponent } from './pages/about-page/components/team/team.component';
import { AboutComponent } from './pages/about-page/components/about/about.component';
import { FooterComponent } from './pages/about-page/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AddOpportunityPageComponent } from './pages/add-opportunity-page/add-opportunity-page.component';
import { OpportunitiesListPageComponent } from './pages/opportunities-list-page/opportunities-list-page.component';
import { OpportunityPageComponent } from './pages/opportunity-page/opportunity-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CoreModule } from '@core/core.module';
import { NewsletterComponent } from './pages/about-page/components/newsletter/newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContactComponent } from './pages/about-page/components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '@guards/auth.guard';

const routes = [
    {
        path: '',
        component: AboutPageComponent,
    },
    {
        path: 'oportunitati',
        component: OpportunitiesListPageComponent,
    },
    {
        path: 'oportunitati/:id',
        component: OpportunityPageComponent,
    },
    {
        path: 'adauga-oportunitate',
        component: AddOpportunityPageComponent,
    },
    {
        path: 'ajut',
        component: HelpPageComponent,
    },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
];

const matImports = [MatIconModule, MatMenuModule, MatCheckboxModule];

@NgModule({
    declarations: [
        AppComponent,
        AboutPageComponent,
        TeamComponent,
        BannerComponent,
        AboutComponent,
        FooterComponent,
        AddOpportunityPageComponent,
        OpportunitiesListPageComponent,
        OpportunityPageComponent,
        HelpPageComponent,
        NewsletterComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        RouterModule.forRoot(routes),
        SharedModule,
        CoreModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        ...matImports,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
