import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { CustomErrorStateMatcher } from '@core/utils/error-state-matcher';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['../../auth.component.scss'],
})
export class RegisterPageComponent implements OnInit {
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
            password1: [null, Validators.required],
            password2: [null, Validators.required],
            first_name: [null, Validators.required],
            last_name: [null, Validators.required],
        });
    }

    onFormSubmit(): void {
        this.isLoading = true;
        this._authService.register(this.form.value).subscribe(
            () => {
                this.isLoading = false;
                this.goToLogin();
            },
            (err: any) => {
                console.log(err);
                this.isLoading = false;
            }
        );
    }

    goToLogin() {
        this._router.navigate(['/auth/login']).then();
    }
}
