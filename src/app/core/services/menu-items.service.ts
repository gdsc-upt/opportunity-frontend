import { Injectable, Injector } from '@angular/core';
import { GenericService } from '@core/services/generic.service';
import { MenuModel } from '@shared/models/menu.model';

@Injectable({
    providedIn: 'root',
})
export class MenuItemsService extends GenericService<MenuModel> {
    protected _modelName = 'menu-items';

    constructor(protected _injector: Injector) {
        super(_injector);
    }
}
