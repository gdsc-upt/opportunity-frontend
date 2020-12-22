import { Injectable, Injector } from '@angular/core';
import { GenericService } from '@core/services/generic.service';
import { MenuModel } from '@shared/models/menu.model';

@Injectable({
    providedIn: 'root'
})
export class MenuItemsService extends GenericService<MenuModel> {
    protected modelName = 'menu-items';

    public constructor(protected injector: Injector) {
        super(injector);
    }
}
