import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent implements OnInit {
    @ViewChild(MatMenuTrigger) private _popupTrigger: MatMenuTrigger;
    @ViewChild('emailInput') private _emailInput: ElementRef;

    options: { displayName: string; value: string; checked: boolean }[] = [
        { displayName: 'Burse', checked: false, value: 'scholarships' },
        { displayName: 'Voluntariat', checked: false, value: 'volunteering' },
    ];
    otherOption = false;
    newsletterForm: FormGroup;
    formSubmitted = false;
    loading = false;

    constructor(private readonly _formBuilder: FormBuilder) {
        this.newsletterForm = this._formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            otherOption: [''],
        });
    }

    ngOnInit(): void {}

    popupOpened(): void {
        setTimeout(() => {
            this._emailInput.nativeElement.focus();
        }, 0);
    }

    submit(): void {
        this.loading = true;

        const selectedOptions = this.options.filter((o) => o.checked).map((o) => o.value);
        if (this.otherOption) {
            selectedOptions.push(this.newsletterForm.get('otherOption').value);
        }
        const form = {
            email: this.newsletterForm.get('email').value,
            options: selectedOptions,
        };

        setTimeout(() => {
            console.log(form);
            this.newsletterForm.reset();
            for (const option of this.options) {
                option.checked = false;
            }
            this.loading = false;
            this.formSubmitted = true;
            this._popupTrigger.closeMenu();
        }, 500);
    }
}
