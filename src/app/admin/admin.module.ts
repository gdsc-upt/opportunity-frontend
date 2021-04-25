import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@interceptors/auth.interceptor';
import { AddOpportunityPageComponent } from '@admin/pages/add-opportunity-page/add-opportunity-page.component';

const routes: Routes = [
    { path: '', component: AdminComponent },
    {
        path: 'add',
        component: AddOpportunityPageComponent,
    },
];

@NgModule({
    declarations: [AdminComponent, AddOpportunityPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class AdminModule {}
