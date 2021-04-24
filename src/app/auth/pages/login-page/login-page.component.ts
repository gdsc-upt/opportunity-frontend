import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { CustomErrorStateMatcher } from '@core/utils/error-state-matcher';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['../../auth.component.scss'],
})
export class LoginPageComponent implements OnInit {
    form: FormGroup;
    isLoading = false;
    matcher = new CustomErrorStateMatcher();

    constructor(
        private readonly _authService: AuthService,
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.form = this._formBuilder.group({
            email: [null, Validators.required],
            password: [null, Validators.required],
        });
    }

    onSubmit(): void {
        this.isLoading = true;
        this._authService.login(this.form.value).subscribe(
            () => {
                this.isLoading = false;
                this._router.navigate(['/admin']).then(() => console.log('You are secure now!'));
            },
            (err: any) => {
                console.log(err);
                this.isLoading = false;
            }
        );
    }

    async goToRegister(): Promise<void> {
        await this._router.navigate(['/auth/register']);
    }
}
