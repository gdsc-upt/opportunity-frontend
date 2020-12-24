import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '@core/services/menu-items.service';
import { MenuModel } from '@shared/models/menu.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    public hasShadow = false;
    public menuItems: MenuModel[];
    public settings = {
        menu_button: 'Adaugă oportunitate!',
        menu_button_link: '/',
    };

    public constructor(private menuItemsService: MenuItemsService, private router: Router) {
        this.getMenuItems();
    }

    public ngOnInit(): void {
        window.addEventListener('scroll', () => this.setMenuShadow(), true);
    }

    public getMenuItems(): void {
        this.menuItemsService.getAll().then((menuItems) => (this.menuItems = menuItems));
    }

    public setMenuShadow(): void {
        const scrollPosition = window.scrollY;
        this.hasShadow = scrollPosition > 20;
    }

    public async navigateToButtonLink() {
        if (this.settings.menu_button_link.startsWith('http')) {
            window.open(this.settings.menu_button_link, '_blank');
            return;
        }

        await this.router.navigateByUrl(this.settings.menu_button_link);
    }
}
