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
    hasShadow = false;
    menuItems: MenuModel[];
    settings = {
        menuButton: 'Adaugă oportunitate!',
        menuButtonLink: '/',
    };

    constructor(private readonly _menuItemsService: MenuItemsService, private readonly _router: Router) {
        this.getMenuItems();
    }

    ngOnInit(): void {
        window.addEventListener('scroll', () => this.setMenuShadow(), true);
    }

    getMenuItems(): void {
        this._menuItemsService.getAll().then((menuItems) => (this.menuItems = menuItems));
    }

    setMenuShadow(): void {
        const scrollPosition = window.scrollY;
        this.hasShadow = scrollPosition > 20;
    }

    async navigateToButtonLink(): Promise<void> {
        if (this.settings.menuButtonLink.startsWith('http')) {
            window.open(this.settings.menuButtonLink, '_blank');
            return;
        }

        await this._router.navigateByUrl(this.settings.menuButtonLink);
    }
}
