import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['../../auth.component.scss'],
})
export class RegisterPageComponent implements OnInit {
    form: FormGroup;
    isLoading = false;
    matcher = new MyErrorStateMatcher();

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            email: [null, Validators.required],
            password1: [null, Validators.required],
            password2: [null, Validators.required],
            first_name: [null, Validators.required],
            last_name: [null, Validators.required],
        });
    }

    onFormSubmit(): void {
        this.isLoading = true;
        this.authService.register(this.form.value).subscribe(
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
        this.router.navigate(['/auth/login']).then();
    }
}
