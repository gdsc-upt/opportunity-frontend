import { Component, OnInit } from '@angular/core';
import { FaqService } from './core/services/faq.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(public faqService: FaqService) {}

    public async ngOnInit() {
        const faqs = await this.faqService.getAll();
        console.log(faqs);
    }
}
