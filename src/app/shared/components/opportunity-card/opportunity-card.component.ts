import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-opportunity-card',
    templateUrl: './opportunity-card.component.html',
    styleUrls: ['./opportunity-card.component.scss'],
})
export class OpportunityCardComponent {
    @Input() image: string;
    @Input() title: string;
    @Input() color: string;
    @Input() organisation: string;
    @Input() description: string;
    @Input() categories: string[];
}
