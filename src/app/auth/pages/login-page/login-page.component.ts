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
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['../../auth.component.scss'],
})
export class LoginPageComponent implements OnInit {
    form: FormGroup;
    isLoading = false;
    matcher = new MyErrorStateMatcher();

    constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            email: [null, Validators.required],
            password: [null, Validators.required],
        });
    }

    onSubmit(): void {
        this.isLoading = true;
        this.authService.login(this.form.value).subscribe(
            () => {
                this.isLoading = false;
                this.router.navigate(['/admin']).then(() => console.log('You are secure now!'));
            },
            (err: any) => {
                console.log(err);
                this.isLoading = false;
            }
        );
    }

    goToRegister(): void {
        this.router.navigate(['/auth/register']).then();
    }
}
