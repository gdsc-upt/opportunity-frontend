import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    public contactForm: FormGroup;
    public loading = false;
    public formSubmitted = false;

    public constructor(private _formBuilder: FormBuilder) {
        this.contactForm = this._formBuilder.group({
            name: [''],
            email: [''],
            subject: [''],
            message: [''],
        });
    }

    public ngOnInit(): void {}

    public submit(): void {
        this.loading = true;

        setTimeout(() => {
            console.log(this.contactForm.getRawValue());
            this.loading = false;
            this.formSubmitted = true;
        }, 1000);
    }
}
