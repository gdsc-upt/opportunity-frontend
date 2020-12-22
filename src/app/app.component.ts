import { Component, OnInit } from '@angular/core';
import { FaqService } from './core/services/faq.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public constructor(public faqService: FaqService) {
    }

    public async ngOnInit() {

    }
}
