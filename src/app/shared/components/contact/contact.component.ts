import { Component, OnInit } from '@angular/core';
import { ContactInterface } from './ContactInterface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    InputData: ContactInterface = {
        lastName: '',
        firstName: '',
        email: '',
        message: ''
    };

    onSubmit(...values): void {
        this.InputData.lastName = values[0].value;
        this.InputData.firstName = values[1].value;
        this.InputData.email = values[2].value;
        this.InputData.message = values[3].value;
        console.log(this.InputData);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
