import { Injectable, Injector } from '@angular/core';
import { GenericService } from './generic.service';
import { FaqModel } from '@shared/models/faq.model';

@Injectable({
    providedIn: 'root',
})
export class FaqService extends GenericService<FaqModel> {
    protected readonly _modelName = 'faqs';

    constructor(protected readonly _injector: Injector) {
        super(_injector);
    }
}
