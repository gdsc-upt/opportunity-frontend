import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from '@core/services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;
    loading = false;
    formSubmitted = false;

    constructor(private _formBuilder: FormBuilder, private contactService: ContactService) {
        this.contactForm = this._formBuilder.group({
            name: [''],
            email: [''],
            subject: [''],
            message: [''],
        });
    }

    ngOnInit(): void {}

    async submit() {
        this.loading = true;
        this.contactService
            .post(this.contactForm.getRawValue())
            .then((res) => {
                this.loading = false;
                this.formSubmitted = true;
            })
            .catch((err) => {
                console.log(err);
                this.loading = false;
                this.formSubmitted = false;
            });
    }
}
