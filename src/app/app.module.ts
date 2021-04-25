import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamComponent } from './pages/about-page/components/team/team.component';
import { AboutComponent } from './pages/about-page/components/about/about.component';
import { RouterModule } from '@angular/router';
import { OpportunitiesPageComponent } from './pages/opportunities-page/opportunities-page.component';
import { OpportunityPageComponent } from './pages/opportunity-page/opportunity-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CoreModule } from '@core/core.module';
import { NewsletterComponent } from './pages/about-page/components/newsletter/newsletter.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ContactComponent } from './pages/about-page/components/contact/contact.component';
import { AuthGuard } from '@guards/auth.guard';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { LatestOpportunitiesComponent } from './pages/about-page/components/latest-opportunities/latest-opportunities.component';
import { CategoriesComponent } from './pages/opportunities-page/components/categories/categories.component';

const routes = [
    {
        path: '',
        component: AboutPageComponent,
    },
    {
        path: 'oportunitati',
        component: OpportunitiesPageComponent,
    },
    {
        path: 'oportunitati/:id',
        component: OpportunityPageComponent,
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
        AboutComponent,
        OpportunitiesPageComponent,
        OpportunityPageComponent,
        HelpPageComponent,
        NewsletterComponent,
        ContactComponent,
        LatestOpportunitiesComponent,
        CategoriesComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        TransferHttpCacheModule,
        RouterModule.forRoot(routes),
        SharedModule,
        CoreModule,
        BrowserAnimationsModule,
        FormsModule,

        ...matImports,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
