import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-opportunity-page',
    templateUrl: './opportunity-page.component.html',
    styleUrls: ['./opportunity-page.component.scss'],
})
export class OpportunityPageComponent {
    public opportunityId: string;

    public constructor(private readonly _activatedRoute: ActivatedRoute) {
        this._activatedRoute.params.subscribe((params) => {
            this.opportunityId = params.id;
        });
    }
}
