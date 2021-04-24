import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { SharedModule } from '@shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
    declarations: [LoginPageComponent, RegisterPageComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
    ],
})
export class AuthModule {}
