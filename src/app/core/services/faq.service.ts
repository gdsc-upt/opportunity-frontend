import { Injectable, Injector } from '@angular/core';
import { GenericService } from './generic.service';
import { FaqModel } from '../../shared/models/faq.model';

@Injectable({
    providedIn: 'root',
})
export class FaqService extends GenericService<FaqModel> {
    protected modelName = 'faqs';

    public constructor(protected injector: Injector) {
        super(injector);
    }
}
