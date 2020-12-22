import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '@core/services/menu-items.service';
import { MenuModel } from '@shared/models/menu.model';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public hasShadow = false;
    public menuItems: MenuModel[];

    public constructor(private menuItemsService: MenuItemsService) {
        this.getMenuItems();
    }

    public ngOnInit(): void {
        window.addEventListener('scroll', () => this.setMenuShadow(), true);
    }

    getMenuItems(): void {
        this.menuItemsService.getAll().then(
            menuItems => {
                this.menuItems = menuItems;
            });
    }

    public setMenuShadow(): void {
        const scrollPosition = window.scrollY;
        this.hasShadow = scrollPosition > 20;
    }
}
