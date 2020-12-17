import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BannerComponent } from './pages/about-page/components/banner/banner.component';
import { TeamComponent } from './pages/about-page/components/team/team.component';
import { AboutComponent } from './pages/about-page/components/about/about.component';
import { RouterModule } from '@angular/router';
import { AddOpportunityPageComponent } from './pages/add-opportunity-page/add-opportunity-page.component';
import { OpportunitiesListPageComponent } from './pages/opportunities-list-page/opportunities-list-page.component';
import { OpportunityPageComponent } from './pages/opportunity-page/opportunity-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';

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
        path: 'adauga-oportunitate',
        component: AddOpportunityPageComponent,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        AboutPageComponent,
        TeamComponent,
        BannerComponent,
        AboutComponent,
        AddOpportunityPageComponent,
        OpportunitiesListPageComponent,
        OpportunityPageComponent,
        HelpPageComponent,
    ],
    imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), RouterModule.forRoot(routes), SharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
