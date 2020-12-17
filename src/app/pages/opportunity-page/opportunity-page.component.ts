import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-opportunity-page',
    templateUrl: './opportunity-page.component.html',
    styleUrls: ['./opportunity-page.component.scss'],
})
export class OpportunityPageComponent implements OnInit {
    public opportunityId: string;

    constructor(private readonly _actr: ActivatedRoute) {
        this._actr.params.subscribe((params) => {
            this.opportunityId = params.id;
        });
    }

    public ngOnInit(): void {}
}
