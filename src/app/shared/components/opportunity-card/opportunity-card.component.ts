import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.scss'],
})
export class OpportunityCardComponent {
    @Input() public image: string;
    @Input() public title: string;
    @Input() public organisation: string;
    @Input() public description: string;
    @Input() public categories: string[];
}
